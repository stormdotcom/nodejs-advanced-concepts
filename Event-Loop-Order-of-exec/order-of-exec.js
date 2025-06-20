// console.log("Start");

// process.nextTick(() => {
//   console.log("NextTick has been called!");
// });

// setImmediate(() => {
//   console.log("Set Immediate has been called");
// });

// Promise.resolve().then(() => {
//   console.log("Promise has been called");
// });

// console.log("End");

console.log("Start");

// Phase 1: process.nextTick() - runs before any I/O tasks
process.nextTick(() => {
  console.log("NextTick has been called!");
});

// Phase 2: setImmediate() - runs in the 'Check' phase of the event loop
setImmediate(() => {
  console.log("Set Immediate has been called");
});

// Phase 3: Promise - runs in the 'Microtask Queue' after the current execution context
Promise.resolve().then(() => {
  console.log("Promise has been called");
});

// Phase 4: Logs "End" after the current execution stack is cleared
console.log("End");

// Node.js event loop phases (explained below):
