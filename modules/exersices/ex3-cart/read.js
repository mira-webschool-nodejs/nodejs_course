const path = require("path");
const dataPath = path.join(__dirname, "./data/cart.json");
const fs = require("fs");

function read() {
  const cart = fs.readFileSync(dataPath, { encoding: "utf-8" });
  return cart;
}

function sum() {
  const cart = JSON.parse(fs.readFileSync(dataPath, { encoding: "utf-8" }));
  let sum = 0;
  for (const name in cart) {
    if (Object.hasOwnProperty.call(cart, name)) {
      const prod = cart[name];
      sum += parseInt(prod.price);
    }
  }
  console.log("total sum: ", sum);
  return sum;
}

module.exports = { read, sum };
