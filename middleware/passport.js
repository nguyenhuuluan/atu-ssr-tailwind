import passport from 'passport';
import { findUser, findUserByUsername } from '../db';
import { localStrategy } from '../lib/passport-strategy';
// import { localStrategy } from '../lib/password-local';

passport.serializeUser((user, done) => {
  // serialize the username into session
  console.log(user);
  done(null, user.username);
});

passport.deserializeUser((req, id, done) => {
  // deserialize the username back into user object
  const user = findUserByUsername(req, id);
  done(null, user);
});

passport.use(localStrategy);

export default passport;
