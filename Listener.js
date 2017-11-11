const Discord = require('discord.js');
const bot = new Discord.Client();

const http = require('http');
const express = require('express');
const app = express();

const getMilestones = require('./Milestones');
const clanId = 2716862;
const channelIds = ['368775188311048192', '378704715896193035'];

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", (message) => {
  if (!channelIds.includes(message.channel.id)) {
    return;
  }
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

bot.login(process.env.TOKEN);