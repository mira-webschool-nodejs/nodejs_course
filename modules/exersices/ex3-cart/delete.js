const path = require("path");
const dataPath = path.join(__dirname, "./data/cart.json");
const fs = require("fs");
const readOp = require("./read");

function deleteOp(prodName) {
  const currentCart = JSON.parse(readOp.read());
  console.log("currentCart before", currentCart);
  console.log("prodName in currentCart", prodName in currentCart);
  if (prodName in currentCart) {
    delete currentCart[prodName];
    fs.writeFileSync(dataPath, JSON.stringify(currentCart));
    console.log("currentCart after", currentCart);
  } else {
    throw Error(`no such prod name to del: ${prodName}`);
  }
}

module.exports = deleteOp;
