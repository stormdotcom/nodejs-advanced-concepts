const async_hooks = require("async_hooks");
const fs = require("fs");

const hook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    fs.writeSync(1, `Init: ${asyncId}, type: ${type}\n`);
  },
  before(asyncId) {
    fs.writeSync(1, `Before: ${asyncId}\n`);
  },
  after(asyncId) {
    fs.writeSync(1, `After: ${asyncId}\n`);
  },
  destroy(asyncId) {
    fs.writeSync(1, `Destroy: ${asyncId}\n`);
  },
});

hook.enable();

setImmediate(() => {
  console.log("Immediate callback executed!");
});
