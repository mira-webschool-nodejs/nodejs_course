const path = require("path");
const dataPath = path.join(__dirname, "./data/cart.json");
const fs = require("fs");
const readOp = require("./read");

function update(prod, name) {
  const currentCart = JSON.parse(readOp.read());
  if (name in currentCart) {
    currentCart[name] = prod;
    fs.writeFileSync(dataPath, JSON.stringify(currentCart));
  } else {
    throw Error("no such product: ", name);
  }
}

module.exports = update;
