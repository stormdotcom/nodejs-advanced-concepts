
const { parentPort } = require('worker_threads');

let sum = 0;
for (let i = 0; i < 1e8; i++) {
  sum += Math.sqrt(i); // Heavy computation
}

parentPort.postMessage(`Computation finished: ${sum}`); 
