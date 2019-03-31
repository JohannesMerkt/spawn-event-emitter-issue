const EventEmitter = require("events").EventEmitter;
const spawn = require("child_process").spawn;

module.exports = class BalanceBoard extends EventEmitter {
  constructor() {
    super();
    this.pythonCode = null;
  }

  //Start python code and listen to the output of the code
  start() {
    this.pythonCode = spawn("python", ["pythonCode.py"], { cwd: __dirname });
    this.pythonCode.stdout.on("data", data => {
      //Process data would be here ...
      //Emit data
      this.emit("data", data.toString().trim());
    });
  }

  //Stop python code
  stop() {
    if (this.pythonCode != null) {
      this.pythonCode.stdout.removeAllListeners("data");
      this.pythonCode.stdin.pause();
      this.pythonCode.kill();
      this.pythonCode = null;
    }
  }
};
