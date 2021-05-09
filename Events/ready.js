const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const Settings = require("../Settings/Settings.json");

var prefix = Settings.prefix;

module.exports = client => {
  client.user.setStatus("idle");
  client.user.setActivity(Settings.botStatus, { type: "PLAYING"}); //// TYPE - WATCHING , PLAYING , LISTENING

  console.log('‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒')
  console.log("                          ")
  console.log(`${client.user.username} ( ${prefix} ) CONNECTED!`) 
};
