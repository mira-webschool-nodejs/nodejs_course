const url = "https://api.nationalize.io";
const axios = require("axios");
async function getUserNationality(user, resNum) {
  try {
    const res = await axios(`${url}?name=${user}`);
    const countries = res.data.country;
    if (countries.length === 0) {
      console.log(`no results for name: ${user}. please select another one`);
      return;
    }
    if (countries.length < resNum) {
      console.log(`only ${countries.length} results, not as given: ${resNum}`);
      return countries;
    }
    let final = countries.slice(0, resNum);
    return final;
  } catch (error) {
    console.log("error", error);
    return;
  }
}

module.exports = getUserNationality;
