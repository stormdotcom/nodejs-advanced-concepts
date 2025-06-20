# Understanding Clusters in Node.js

## What is a Cluster?

Imagine you have a super fast computer, but you're only using one part of it to run your app. That’s like having a pizza shop with 4 ovens but only using one to bake all the pizzas. It’s slow and wastes power.

A **cluster** in Node.js lets you use all the "ovens" (CPU cores) in your computer to run your app faster and handle more users at the same time.

## Why Use Clusters?

- Node.js normally runs in a single thread (one task at a time).
- Clusters allow you to run multiple copies of your app at once.
- This helps your app handle more users and work faster.

## Example

```js
const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master process is running. Forking ${numCPUs} workers...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  console.log(`Worker ${process.pid} started`);
  // Your server code goes here
}
```

## Breaking It Down

- `cluster.isMaster` — Checks if this is the main process.
- `cluster.fork()` — Starts a new worker (like opening another oven).
- `os.cpus().length` — Finds out how many CPU cores your computer has.

## Summary

Clusters help your Node.js app run faster by using all the power of your computer. It’s like having more workers in your shop to serve more customers at once.
