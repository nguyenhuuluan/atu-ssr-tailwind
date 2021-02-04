import crypto from 'crypto';
import { nanoid } from 'nanoid';

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

const users = [];

export const createUser = (req, { username, password, name }) => {
  console.log('xxxxxx');
  // console.log('[createUser]: ', users, { username, password });
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  // const salt = crypto.randomBytes(16).toString('hex');
  // const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString();

  // const user = {
  //   id: nanoid(12),
  //   createAt: Date.now(),
  //   username,
  //   name,
  //   hash,
  //   salt,
  // };

  // // This is an in memory store for users, there is no data persistence without a proper DB
  // // Here you should insert the user into the database
  // // await db.createUser(user)
  // req.session.users.push(user);
  // users.push(user);
  // return { username, createdAt: Date.now() };
};

export function findUserByUsername(req, username) {
  // Here you find the user based on id/username in the database
  // const user = await db.findUserById(id)
  return req.session.users.find((user) => user.username === username);
}

export function updateUserByUsername(req, username, update) {
  // Here you update the user based on id/username in the database
  // const user = await db.updateUserById(id, update)
  const user = req.session.users.find((u) => u.username === username);
  Object.assign(user, update);
  return user;
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  console.log('[findUser]: ', users, username);

  // This is an in memory store for users, there is no data persistence without a proper DB
  return users.find((user) => user.username === username);
}

export function deleteUser(req) {
  // Here you should delete the user in the database
  // await db.deleteUser(req.user)
  req.session.users = req.session.users.filter((user) => user.username !== req.user.username);
}

export async function getAllUsers(req) {
  // For demo purpose only. You are not likely to have to return all users.
  // return users;
  return req.session.users;
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  console.log('[validatePassword]: ', users, user, inputPassword);

  const inputHash = crypto.pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512').toString('hex');
  const passwordMatch = user.hash === inputHash;
  return passwordMatch;
}
