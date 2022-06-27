const { Client } = require("quotebook-api");
const client = Client({ apiKey: "api-key122345" });

module.exports = function (name) {
  client
    .fetchByAuthor({ q: name })
    .then((response) => console.log(response.data.result))
    .catch((e) => console.log(e));
};
