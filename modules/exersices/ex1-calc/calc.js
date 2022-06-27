const args = process.argv.slice(2, process.argv.length);
if (args.length > 3) {
  throw Error("too much args");
}
const num1 = args[0];
console.log("num1", num1);
const num2 = args[1];
console.log("num2", num2);
const operation = args[2];
console.log("operation", operation);
const allowedOperations = ["+", "-", "*", "/"];
if (
  Number(num1) !== NaN &&
  Number(num2) !== NaN &&
  allowedOperations.includes(operation)
) {
  switch (operation) {
    case "+":
      console.log(Number(num1) + Number(num2));
      break;
    case "-":
      console.log(Number(num1) - Number(num2));
      break;
    case "+":
      break;
    case "*":
      console.log(Number(num1) * Number(num2));
      break;
    case "/":
      console.log(Number(num1) / Number(num2));
      break;
  }
} else {
  throw Error("bad args");
}
