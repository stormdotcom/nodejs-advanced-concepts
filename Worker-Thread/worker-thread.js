const { Worker, isMainThread, parentPort } = require('worker_threads');
const express = require("express");
const app = express();

// First route (already existing)
app.get("/", (req, res) => {
res.send("hello")
});

// Second route (already existing)
app.get("/fast", (req, res) => {
  let counter = 0;
  while (counter < 99e9) {
    counter++;
  }
  res.send("fast " + counter);
});

// Third route: a more CPU-intensive task with a different logic
app.get("/heavy", (req, res) => {
  // Create a new worker from a different file (heavyWorker.js)
  const worker = new Worker('./heavy.js');
  worker.on('message', (message) => {
    res.send("heavy task " + message);
  });
  worker.on('error', (error) => {
    console.error(`Worker error: ${error}`);
  });
  worker.on('exit', (code) => { 
    console.log(`Worker exited with code: ${code}`);
  });
});

// Fourth route: a light and quick task
app.get("/light", (req, res) => {
  res.send("This is a light task that doesn't require much computation.");
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
