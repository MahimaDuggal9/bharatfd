const { createClient } = require("redis");

const redisClient = createClient();
redisClient.connect();

redisClient.on("connect", () => console.log("Connected to Redis"));

module.exports = redisClient;
