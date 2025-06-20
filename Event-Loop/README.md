# Understanding the Event Loop in Node.js

## What is the Event Loop?

Imagine you're the only person working at a help desk. People come to you with questions, and you answer them one by one. If someone asks a question that takes time (like calling someone else for help), you tell them to wait and help the next person in line. Once the call is done, you go back and finish helping the first person.

This is how the **event loop** works in Node.js. It handles tasks one at a time, but it doesn’t get stuck waiting. It moves on and comes back later when the slow task is ready.

## Why is it Important?

- Node.js uses a single thread (one worker).
- The event loop helps it handle many tasks without getting stuck.
- It makes Node.js fast and efficient for web servers and apps.

## Example

```js
console.log("Start");

setTimeout(() => {
  console.log("This runs later");
}, 1000);

console.log("End");
```

### Output:

```
Start
End
This runs later
```

## Breaking It Down

- `console.log("Start")` — Runs first.
- `setTimeout(...)` — Schedules a task to run later.
- `console.log("End")` — Runs next because the timeout is still waiting.
- After 1 second, the event loop runs the delayed task.

## Summary

The event loop is like a smart helper that keeps your app moving. It doesn’t wait around for slow tasks. Instead, it keeps working and comes back to finish things later. That’s how Node.js stays fast even with just one worker.
