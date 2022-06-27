(async () => {
  const args = process.argv.slice(2, process.argv.length);
  const getUser = require("get-name-national");
  const name = args[0];
  const num = args[1] || 5;
  console.log(`got response for user: ${name}, and num: ${num}`);
  const res = await getUser(name, num);
  console.log(res);
})();
