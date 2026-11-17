// In-memory storage for users.
// This is a plain array, so all data is lost when the program stops.
export const users = [];

// A counter that gives each new user a unique id (1, 2, 3, ...).
let lastId = 0;

export function nextUserId() {
  lastId += 1;
  return lastId;
}
