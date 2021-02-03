// const passport = require('passport');
// const { localStrategy } = require('../../lib/password-local');

import nextConnect from 'next-connect';

import auth from '../../middleware/auth';
import myPassport from '../../middleware/passport';
import { extractUser } from '../../lib/api-helpers';

const handler = nextConnect();
handler.use(auth);

// const authenticate = (method, req, res) =>
//   new Promise((resolve, reject) => {
//     passport.authenticate(method, { session: false }, (error, token) => {
//       if (error) reject(error);
//       else resolve(token);
//     })(req, res);
//   });

// handler.post(async (req, res) => {
//   try {
//     const user = await authenticate('local', req, res);

//     // session is the payload to save in the token, it may contain basic info about the user
//     const session = { ...user };
//     console.log(session, user);

//     await createLoginSession(res, session);

//     res.status(200).send({ done: true });
//   } catch (error) {
//     console.error(error);
//     res.status(401).send(error.message);
//   }
// });

// handler.delete((req, res) => {
//   removeTokenCookie(res);
//   res.writeHead(302, { Location: '/' });
//   res.end();
// });

handler.post(myPassport.authenticate('local'), (req, res) => {
  console.log('[api] login [post]');
  res.json({ user: extractUser(req.user) });
});

export default handler;
