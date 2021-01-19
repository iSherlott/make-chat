const axios = require("axios");

async function api() {
  const api = await axios.get(`http://45.233.50.124:3000/rooms`);
  return api.data;
}

module.exports = api();
