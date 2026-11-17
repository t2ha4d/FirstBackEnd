// Entry point: runs every operation in order and prints the results.
// Run it with:  npm start   (or  npm run dev  to re-run on every file save)
import { createUser, listUsers } from './modules/users/users.service.js';
import {
  createTask,
  listTasks,
  getTaskById,
  updateTaskStatus,
  deleteTask,
} from './modules/tasks/tasks.service.js';

// Small helper that prints a numbered heading so the output is easy to follow.
let step = 0;
function section(title) {
  step += 1;
  console.log(`\n=== ${step}. ${title} ===`);
}

// --- Users ---
section('Create users');
const alice = createUser({ name: 'Alice', email: 'alice@example.com' });
const bob = createUser({ name: 'Bob', email: 'bob@example.com' });
console.log('Created:', alice);
console.log('Created:', bob);

section('List all users');
console.table(listUsers());

// --- Tasks ---
section('Create tasks');
const task1 = createTask({ title: 'Learn ESM imports', userId: alice.id });
const task2 = createTask({ title: 'Build a task module', userId: alice.id });
const task3 = createTask({ title: 'Write the README', userId: bob.id });
console.log('Created:', task1);
console.log('Created:', task2);
console.log('Created:', task3);

section('List all tasks');
console.table(listTasks());

section(`Get task by id (${task2.id})`);
console.log('Found:', getTaskById(task2.id));

section(`Update status of task ${task1.id} to "done"`);
console.log('Updated:', updateTaskStatus(task1.id, 'done'));

section(`Delete task ${task3.id}`);
console.log('Deleted?', deleteTask(task3.id));

section('List all tasks after changes');
console.table(listTasks());

// --- Error handling examples ---
// These show what happens with bad input. try/catch stops the error from crashing the program.
section('Error examples');

try {
  updateTaskStatus(task2.id, 'finished');
} catch (error) {
  console.log('Invalid status ->', error.message);
}

try {
  createTask({ title: 'Orphan task', userId: 99 });
} catch (error) {
  console.log('Unknown user  ->', error.message);
}

try {
  createUser({ name: 'No Email' });
} catch (error) {
  console.log('Missing field ->', error.message);
}

console.log('Missing task  ->', getTaskById(999)); // null means "not found"

console.log('\nDone! All operations ran successfully.');
