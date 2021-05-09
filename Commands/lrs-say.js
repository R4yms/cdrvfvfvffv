//-------------------------Required Modules--------------------------\\


const Discord = require('discord.js');
const Settings = require("../Settings/Settings.json")
const Roles = require('../Settings/Roles.json');//
const Channels = require('../Settings/Channels.json');//
const ServerSettings = require('../Settings/ServerSettings.json');//


//-------------------------Required Modules--------------------------\\


exports.run = async (client, message, args) => {
	if (!message.guild) return message.author.sendMessage('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
    let erkekRolü = Roles.BoyRole1;
    let kızRolü = Roles.BoyRole2;
    let ekipRolü = Roles.Tagrole; 
 
  let guild = message.guild; 
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let tag = "✢"
    const larsysay = new Discord.MessageEmbed()
            .setTitle(` ${message.author.tag} - **Tarafından istendi**.`)
            .setFooter(`${dev} ${y}${s}${r}${a}${l}`)
    .setDescription(`
\`\`\` ${Settings.prefix}Tag Yazarak Tagımızı Alabilirsin. \`\`\`

**<a:laciverttik:833691153483825152> Toplam Üye: \`\`${message.guild.memberCount}\`\`**

**<a:laciverttik:833691153483825152> Aktif Üye: \`\`${message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}\`\`**

**<a:laciverttik:833691153483825152> Tagda Bulunan Üyeler: \`\`${message.guild.members.cache.filter(m => m.user.username.includes(tag)).size}\`\`**

**<a:laciverttik:833691153483825152> Seslide Bulunan Üye Sayısı: \`\`${count}\`\`**

**<a:laciverttik:833691153483825152> Sunucunun Boost Sayısı: \`\`${message.guild.premiumSubscriptionCount}\`\`**

**<a:laciverttik:833691153483825152> Sunucudaki Erkek Üye Sayısı: \`\`${message.guild.roles.cache.get(erkekRolü).members.size}\`\`**

**<a:laciverttik:833691153483825152> Sunucudaki Kız Üye Sayısı: \`\`${message.guild.roles.cache.get(kızRolü).members.size}\`\`**

\`\`\` \`\`\`
`)
    
 message.channel.send(larsysay);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayy'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
}

//---DEV---\\
var dev = "Developed By"
var y = "𝙻"
var s = "𝚊"
var r = "𝚛"
var a = "𝚜"
var l = "𝚢"
//---DEV---\\