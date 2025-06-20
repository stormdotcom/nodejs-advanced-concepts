const cluster = require('cluster');
const os = require('os');
const express = require('express');

// Check if the current process is the master
if (cluster.isMaster) {
  const numCPUs = 1;
  console.log(`Master process ${process.pid} is running`);
  console.log(`Forking for ${numCPUs} CPUs`);

  // Fork workers for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for dying workers and spawn new ones
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Spawning a new worker...`);
    cluster.fork();
  });

} else {
  // Worker processes create their own Express server
  const app = express();

  // Define a route
  app.get('/', (req, res) => {
    res.send(`Hello World from worker ${process.pid}`);
  });

  // Start the server on port 8000
  app.listen(8000, () => {
    console.log(`Worker process ${process.pid} started and listening on port 8000`);
  });
}
