//-------------------------Required Modules--------------------------\\


const Discord = require("discord.js");


//-------------------------Required Modules--------------------------\\


exports.run = async (client, message, args) => {

const larsyregping = new Discord.MessageEmbed()

.addField(`${client.user.username} Botunun Pingi: ` ,`${client.ws.ping} ms`)
.setColor("#323131")
.setFooter(`${dev} ${y}${s}${r}${a}${l}`)
  
return message.channel.send(larsyregping)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Sade Ping Komutu iΕde mq',
  usage: 'ping'
}; 

//---DEV---\\
var dev = "Developed By"
var y = "π»"
var s = "π"
var r = "π"
var a = "π"
var l = "π’"
//---DEV---\\
