const request = require('request');
var bungieApi = request.defaults({
  headers: {"X-API-Key": process.env.BUNGIE_API_KEY}
});
module.exports = bungieApi;
