// The "rules" for users: validating input and working with the users array.
import { users, nextUserId } from './users.data.js';

// Create a new user and save it in memory.
export function createUser({ name, email }) {
  // Validate input before saving anything.
  if (!name || !email) {
    throw new Error('Both "name" and "email" are required.');
  }

  const user = { id: nextUserId(), name, email };
  users.push(user);
  return user;
}

// Return all users.
// We return a copy ([...users]) so other code can't change the original array by accident.
export function listUsers() {
  return [...users];
}

// Find one user by id. Returns undefined if not found.
// The tasks module uses this to check that a task's owner exists.
export function findUserById(id) {
  return users.find((user) => user.id === id);
}
