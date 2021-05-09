//-------------------------Required Modules--------------------------\\


const Discord = require("discord.js");
const ServerSettings = require('../Settings/ServerSettings.json');//


//-------------------------Required Modules--------------------------\\


exports.run = async (client, message, args) => {

const larsyregister = new Discord.MessageEmbed()

.setDescription(`**Buyur Bizim Tagımız: ** \`${ServerSettings.Tag}\``)
.setFooter("Tagımızı Alarak Ailemize Katılabilirsin.")
    
return message.channel.send(larsyregister)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tag", "tagne", "tagver"],
  permLevel: 0
};

exports.help = {
  name: "tag",
  description: "",
  usage: ""
};