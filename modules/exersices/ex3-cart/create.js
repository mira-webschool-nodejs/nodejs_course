const path = require("path");
const dataPath = path.join(__dirname, "./data/cart.json");
const fs = require("fs");
const readOp = require("./read");

function create(name, prod) {
  const currentCart = JSON.parse(readOp.read());
  currentCart[name] = prod;
  fs.writeFileSync(dataPath, JSON.stringify(currentCart));
}

module.exports = create;
