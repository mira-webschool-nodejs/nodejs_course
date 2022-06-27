const args = process.argv.slice(2, process.argv.length);
const operation = args[0];
const list = require("./list");
const author = require("./author");
const { exit } = require("process");
const name = args[1];

(async () => {
  switch (operation) {
    case "list":
      console.log("in list");
      await list;
      break;
    case "author":
      const authorsQuotes = await author(name);
      console.log("authorsQuotes", authorsQuotes);
      break;
    default:
      console.log(`no such operation: ${operation}. Must be list/author`);
      exit(1);
  }
})();
