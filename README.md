# Task Management Backend Starter

A beginner-friendly Node.js project that manages **users** and **tasks**.
It uses only built-in Node.js features: no database and no npm packages.
All data lives in memory (plain JavaScript arrays), so it resets every time the program runs.

## Requirements

- [Node.js](https://nodejs.org/) version 18.11 or newer (check with `node --version`)

## How to run

```bash
npm start      # runs the program once
npm run dev    # runs it again every time you save a file (stop with Ctrl + C)
```

There is nothing to install, because the project has no dependencies.

## What it does

`src/app.js` runs these steps in order and prints the result of each one:

1. Create two users
2. List all users
3. Create three tasks
4. List all tasks
5. Get one task by its id
6. Mark a task as `done`
7. Delete a task
8. List the tasks again to show the changes
9. Show what happens with bad input (invalid status, unknown user, missing field, missing task)

## Folder structure

```
FirstBackEnd/
├── package.json              Project info, "type": "module", npm scripts
├── .gitignore                Files Git should not track
├── README.md                 This file
└── src/
    ├── app.js                Entry point: runs all operations and prints output
    └── modules/
        ├── users/
        │   ├── users.data.js     The users array and id counter
        │   └── users.service.js  createUser, listUsers, findUserById
        └── tasks/
            ├── tasks.data.js     The tasks array, id counter, allowed statuses
            └── tasks.service.js  createTask, listTasks, getTaskById,
                                  updateTaskStatus, deleteTask
```

Each module has two files:

- **`*.data.js`** stores the data. Later you can replace this file with a real database.
- **`*.service.js`** holds the rules: it checks the input, then reads or changes the data.

## Data shapes

```js
// User
{ id: 1, name: 'Alice', email: 'alice@example.com' }

// Task (status is always "todo" or "done")
{ id: 1, title: 'Learn ESM imports', status: 'todo', userId: 1 }
```

A task's `userId` must belong to an existing user. Otherwise `createTask` throws an error.

## Available functions

| Module | Function | What it does |
|---|---|---|
| users | `createUser({ name, email })` | Adds a user. Throws if a field is missing. |
| users | `listUsers()` | Returns all users. |
| tasks | `createTask({ title, userId })` | Adds a task with status `"todo"`. |
| tasks | `listTasks()` | Returns all tasks. |
| tasks | `getTaskById(id)` | Returns the task, or `null` if not found. |
| tasks | `updateTaskStatus(id, status)` | Sets status to `"todo"` or `"done"`. Returns `null` if not found. |
| tasks | `deleteTask(id)` | Returns `true` if deleted, `false` if not found. |

## Good to know

- **ESM imports need the `.js` extension**, for example `import { listUsers } from './users.service.js'`.
- **`require()` is not used.** This project uses `import`/`export` because `package.json` has `"type": "module"`.
- **Data is not saved.** Restarting the program starts with empty arrays.

## Ideas for next steps

- Add update and delete for users
- Turn it into an HTTP API with the built-in `node:http` module
- Save data to a JSON file with `node:fs`
