# Understanding Thread Pool in Node.js

## What is a Thread Pool?

Imagine you have a group of friends who help you with homework. You give them tasks like solving math problems or writing essays. But you only have 4 friends, so only 4 tasks can be done at the same time. The rest have to wait their turn.

In Node.js, the **thread pool** is like those 4 friends. It’s a group of workers that handle tasks that take time, like reading files or doing heavy calculations.

## Why Use a Thread Pool?

- Node.js runs on a single main thread.
- Some tasks are slow and need to be done in the background.
- The thread pool helps by doing these tasks without blocking the main thread.

## How Many Threads?

By default, Node.js has 4 threads in the pool. You can change this number using an environment variable called `UV_THREADPOOL_SIZE`.

## Example

```js
const fs = require("fs");

fs.readFile("bigfile.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File read complete");
});
```

Even though reading a file is slow, Node.js uses the thread pool to do it in the background. Your app can keep running while the file is being read.

## Summary

The thread pool is like a team of helpers that take care of slow tasks behind the scenes. This keeps your app fast and responsive, even when doing heavy work.
