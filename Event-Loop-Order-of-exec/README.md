# Understanding the Order of Execution in Node.js

## What Does "Order of Execution" Mean?

Imagine you're following a to-do list. You do one thing, then the next, and so on. But what if one task says, "Wait 5 minutes before doing this"? You skip it for now and do the next task. Later, you come back to it.

Node.js works the same way. It has a list of things to do, and it decides the order based on how long each task takes and what kind of task it is.

## Why is This Important?

- Some tasks take time (like reading a file or waiting for a timer).
- Node.js doesn't wait around. It keeps going and comes back to the slow task later.
- Understanding the order helps you write better and faster code.

## Example

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");
```

### Output:

```
1
4
3
2
```

## Breaking It Down

- `console.log("1")` — Runs first.
- `setTimeout(..., 0)` — Scheduled to run later (goes to the timer queue).
- `Promise.resolve().then(...)` — Runs after current tasks (goes to the microtask queue).
- `console.log("4")` — Runs next.
- Then the microtask (`3`) runs.
- Finally, the timer task (`2`) runs.

## Summary

Node.js has a smart way of deciding what to do next. It finishes quick tasks first, then handles promises, and finally timers. Knowing this helps you understand why things happen in a certain order in your code.
