const args = process.argv.slice(2, process.argv.length);
const operation = args[0];
const createOp = require("./create");
const readOp = require("./read");
const updateOp = require("./update");
const deleteOp = require("./delete");
let argsObj = {};

if (args[1]) {
  argsObj = JSON.parse(args[1]);
}
const { name, prod } = argsObj;

switch (operation) {
  case "create":
    if (name) {
      createOp(name, prod);
    } else {
      throw Error("must have prod name as 2nd arg in create operation");
    }
    break;
  case "read":
    console.log(readOp.read());
    break;
  case "update":
    updateOp(prod, name);
    break;
  case "delete":
    deleteOp(name);
    break;
  case "sum":
    readOp.sum();
    break;
}
