# Understanding Worker Threads in Node.js

## What is a Worker Thread?

Imagine you're doing a super hard math problem. It takes all your focus, and you can’t do anything else until it’s done. But what if you could ask a friend to do it for you while you keep doing other stuff?

That’s what **worker threads** do in Node.js. They help you run heavy tasks in the background so your app doesn’t freeze or slow down.

## Why Use Worker Threads?

- Node.js usually runs on a single thread.
- Heavy tasks (like big calculations) can block everything else.
- Worker threads let you run those tasks separately.

## When to Use Them?

- When you have CPU-heavy work (like image processing or big math).
- When you want to keep your app fast and responsive.

## Example

```js
const { Worker } = require("worker_threads");

const worker = new Worker("./heavy.js");

worker.on("message", (msg) => {
  console.log("Result from worker:", msg);
});
```

In `heavy.js`, you might have:

```js
const { parentPort } = require("worker_threads");

let result = 0;
for (let i = 0; i < 1e9; i++) {
  result += i;
}

parentPort.postMessage(result);
```

## Summary

Worker threads are like smart helpers that take care of big jobs without slowing down your main app. They’re great for doing heavy work in the background while your app keeps running smoothly.
