const ModuleClass = require("./index");

var moduleObject = new ModuleClass();

moduleObject.start();

moduleObject.on("data", data => {
  console.log(data);
});
