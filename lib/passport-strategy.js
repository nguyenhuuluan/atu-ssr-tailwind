import Local from 'passport-local';
import { findUser, findUserByUsername, validatePassword } from '../db';

export const localStrategy = new Local({ passReqToCallback: true }, (req, username, password, done) => {
  // Here you lookup the user in your DB and compare the password/hashed password
  const user = findUserByUsername(req, username);
  // Security-wise, if you hashed the password earlier, you must verify it
  // if (!user || await argon2.verify(user.password, password))
  if (!user || !validatePassword(user, password)) done(null, null);
  else done(null, user);
});

// export const localStrategy = new Local.Strategy((username, password, done) => {
//   findUser({ username })
//     .then((user) => {
//       if (user && validatePassword(user, password)) done(null, user);
//       else done(new Error('Invalid username and password combination'));
//     })
//     .catch((error) => done(error));
// });

export const localStrategy2 = new Local.Strategy((username, password, done) => {
  findUser({ username }).then((user) => {
    // Security-wise, if you hashed the password earlier, you must verify it
    // if (!user || await argon2.verify(user.password, password))

    if (user && validatePassword(user, password)) done(null, user);
    else done(new Error('Invalid username and password combination'));
  });
});
