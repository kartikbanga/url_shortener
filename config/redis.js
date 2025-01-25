const redis = require("redis");
const client = redis.createClient({
  url: process.env.REDIS_URI,
});

client.on("connect", () => console.log("Redis Connected"));
client.on("error", () => console.error("Redis Error: ", err));

client.connect();
module.exports = client;
