// The "rules" for tasks: validating input and working with the tasks array.
import { tasks, nextTaskId, TASK_STATUSES } from './tasks.data.js';
// Tasks belong to users, so we import a helper from the users module.
import { findUserById } from '../users/users.service.js';

// Create a new task. Every new task starts with status "todo".
export function createTask({ title, userId }) {
  if (!title) {
    throw new Error('"title" is required.');
  }
  if (!findUserById(userId)) {
    throw new Error(`User with id ${userId} does not exist.`);
  }

  const task = { id: nextTaskId(), title, status: 'todo', userId };
  tasks.push(task);
  return task;
}

// Return all tasks (as a copy, so the original array stays safe).
export function listTasks() {
  return [...tasks];
}

// Find one task by id. Returns null if it doesn't exist.
export function getTaskById(id) {
  return tasks.find((task) => task.id === id) ?? null;
}

// Change a task's status to "todo" or "done".
// Returns the updated task, or null if the task doesn't exist.
export function updateTaskStatus(id, status) {
  if (!TASK_STATUSES.includes(status)) {
    throw new Error(`Invalid status "${status}". Use one of: ${TASK_STATUSES.join(', ')}.`);
  }

  const task = getTaskById(id);
  if (!task) {
    return null;
  }

  task.status = status;
  return task;
}

// Delete a task by id. Returns true if it was deleted, false if it wasn't found.
export function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    return false;
  }

  tasks.splice(index, 1); // remove 1 item at this position
  return true;
}
