// const passport = require('passport');
// const { localStrategy } = require('../../lib/password-local');

import nextConnect from 'next-connect';
import passport from 'passport';
import { setLoginSession } from '../../lib/auth';
import { removeTokenCookie } from '../../lib/auth-cookies';
import { localStrategy } from '../../lib/password-local';
import allMiddleware from '../../middlewares/all';

const handler = nextConnect();
passport.use(localStrategy);

const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) reject(error);
      else resolve(token);
    })(req, res);
  });

handler.use(passport.initialize()).use(passport.session());

handler.post(async (req, res) => {
  try {
    const user = await authenticate('local', req, res);

    // session is the payload to save in the token, it may contain basic info about the user
    const session = { ...user };
    console.log(session, user);

    await setLoginSession(res, session);

    res.status(200).send({ done: true });
  } catch (error) {
    console.error(error);
    res.status(401).send(error.message);
  }
});

handler.delete((req, res) => {
  removeTokenCookie(res);
  res.writeHead(302, { Location: '/' });
  res.end();
});

export default handler;
