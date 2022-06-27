const ar = require("./ar");
const en = require("./en");
const args = process.argv.slice(2, process.argv.length);

const name = args[0];
const lang = args[1];

switch (lang) {
  case "ar":
    ar(name);
    break;
  case "en":
    en(name);
    break;
}
