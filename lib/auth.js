import Iron from '@hapi/iron';

export async function createLoginSession(session, secret) {
  console.log('createLoginSession: ', session);
  const createdAt = Date.now();

  // Create a session object with a max age that we can validate later
  const obj = { ...session, createdAt };
  const token = Iron.seal(obj, secret, Iron.defaults);

  return token;
}

export async function getLoginSession(token, secret) {
  console.log('getLoginSession: ', token, secret);
  const session = await Iron.unseal(token, secret, Iron.defaults);
  const expiresAt = session.createdAt + session.maxAge * 1000;

  // Validate the expiration date of the session
  if (session.maxAge && Date.now() > expiresAt) throw new Error('Session expired');

  return session;
}
