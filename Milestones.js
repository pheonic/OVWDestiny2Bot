const bungieApi = require('./BungieApi');
const Discord = require('discord.js');

const milestoneMap = {"3789021730": {'name': 'Nightfall'},
                      "2112637710": {'name': 'Trials of the Nine'},
                      "2043403989": {'name': 'Raid'},
                      "964120289":  {'name': 'Crucible'}};

function getMilestones(message, clanId) {
  const requestUrl = "https://www.bungie.net/Platform/Destiny2/Clan/" + clanId + "/WeeklyRewardState/";
  bungieApi.get(requestUrl, function (error, response, body) {
    // An array containing the four milestone in order, I assume the hashes are constant and in the order they are on the bungie.net website
    const milestones = JSON.parse(body).Response.rewards[0].entries;
    const embed = new Discord.RichEmbed();
    milestones.forEach(function (milestone) {
      const name = milestoneMap[milestone.rewardEntryHash].name;
      if (milestone.earned) {
        embed.addField(name, "✅ Earned", false);
      } else {
        embed.addField(name, "❌ Not earned", false);
      }
    });
    message.channel.send({embed});
  });
}

module.exports = getMilestones;
