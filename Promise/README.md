# Understanding Promises in Node.js

## What is a Promise?

Imagine you order a pizza. The pizza shop says, "We’ll deliver it in 30 minutes." That’s a **promise**. You don’t get the pizza right away, but you know it’s coming.

In Node.js, a **Promise** is a way to handle things that take time, like reading a file or getting data from the internet.

## Why Use Promises?

- To handle tasks that take time without stopping everything else.
- To write cleaner and more readable code.
- To avoid "callback hell" (messy nested functions).

## Example

```js
const pizzaOrder = new Promise((resolve, reject) => {
  let pizzaReady = true;

  if (pizzaReady) {
    resolve("Pizza is ready!");
  } else {
    reject("Sorry, we ran out of ingredients.");
  }
});

pizzaOrder
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

## Breaking It Down

- `new Promise(...)` — Creates a new promise.
- `resolve(...)` — Called when the task is successful.
- `reject(...)` — Called when something goes wrong.
- `.then(...)` — Runs if the promise is successful.
- `.catch(...)` — Runs if the promise fails.

## Summary

A Promise is like a future delivery. It lets your code keep going while waiting for something to finish. When it’s done, you get the result or an error. Promises make your code easier to manage and understand.
