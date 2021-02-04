import Router from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';
import fetcher from '../lib/fetch';

const useUser = ({ redirectTo, redirectIfFound } = {}) => {
  const { data, mutate } = useSWR('/api/user', fetcher);
  const loading = !data;
  const user = data?.user;
  const finished = Boolean(data);
  const hasUser = Boolean(user);
  console.log('[useUser]', loading, user, finished, hasUser);

  useEffect(() => {
    if (!redirectTo || !finished) return;
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !hasUser) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && hasUser)
    ) {
      Router.push(redirectTo);
    }
  }, [redirectTo, redirectIfFound, finished, hasUser]);

  // return [error ? null : user];

  return [user, { mutate, loading }];
};

export default useUser;
