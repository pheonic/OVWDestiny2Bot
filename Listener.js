const Discord = require('discord.js');
const bot = new Discord.Client();

const http = require('http');
const express = require('express');
const app = express();

const getMilestones = require('./Milestones');
const clanId = 2716862;

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", (message) => {
const command = message.content;
  switch (command) {
  case "milestones" :
    getMilestones(message, clanId);
    break;
  }
})

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

bot.login(process.env.TOKEN);