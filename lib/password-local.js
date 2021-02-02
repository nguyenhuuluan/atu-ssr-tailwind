import Local from 'passport-local';
import { findUser, validatePassword } from '../db';

export const localStrategy = new Local.Strategy((username, password, done) => {
  findUser({ username })
    .then((user) => {
      if (user && validatePassword(user, password)) done(null, user);
      else done(new Error('Invalid username and password combination'));
    })
    .catch((error) => done(error));
});

export const localStrategy2 = new Local.Strategy((username, password, done) => {
  findUser({ username }).then((user) => {
    // Security-wise, if you hashed the password earlier, you must verify it
    // if (!user || await argon2.verify(user.password, password))

    if (user && validatePassword(user, password)) done(null, user);
    else done(new Error('Invalid username and password combination'));
  });
});
