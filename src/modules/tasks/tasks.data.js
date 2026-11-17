// In-memory storage for tasks.
// This is a plain array, so all data is lost when the program stops.
export const tasks = [];

// The only allowed values for a task's status.
export const TASK_STATUSES = ['todo', 'done'];

// A counter that gives each new task a unique id (1, 2, 3, ...).
let lastId = 0;

export function nextTaskId() {
  lastId += 1;
  return lastId;
}
