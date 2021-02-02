import passport from 'passport';
import { findUser } from '../db';

const myPassport = passport;

myPassport.serializeUser((user, done) => {
  // serialize the username into session
  done(null, user.username);
});

myPassport.deserializeUser((username, done) => {
  findUser({ username }).then(
    (user) => done(null, user),
    (error) => done(error),
  );
});

export default myPassport;
