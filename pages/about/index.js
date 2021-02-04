import React from 'react';
import withWebAppLayout from '../../components/Layout/webapp.layout';
import useUser from '../../hooks/user';

const AboutPage = () => {
  // const [user, { mutate }] = useUser();

  return (
    <>
      <div>
        <h1>This is About page </h1>
      </div>
    </>
  );
};

export default withWebAppLayout(AboutPage);
