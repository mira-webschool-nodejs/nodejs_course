const { Client } = require("quotebook-api");
const client = Client({ apiKey: "api-key122345" });
// Async-Await
module.exports = (async () => {
  try {
    const response = await client.fetchAllAuthors();
    return console.log(response.data.result);
  } catch (e) {
    return console.log(e);
  }
})();
