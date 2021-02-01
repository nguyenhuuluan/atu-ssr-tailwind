import Local from 'passport-local';
import { findUser, validatePassword } from '../db';

export const localStrategy = new Local.Strategy((username, password, done) => {
  findUser({ username })
    .then((user) => {
      if (user && validatePassword(user, password)) {
        done(null, user);
      } else {
        done(new Error('Invalid username and password combination'));
      }
    })
    .catch(done);
});

export const localStrategy2 = new Local.Strategy((username, password, done) => {
  findUser({ username }).then((user) => {
    if (user && validatePassword(user, password)) {
      done(null, user);
    } else {
      done(new Error('Invalid username and password combination'));
    }
  });
});
