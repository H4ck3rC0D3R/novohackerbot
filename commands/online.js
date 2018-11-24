const discord = require('discord.js');

module.exports.run = (bot, message, args) => {
  var hrs = Math.round(bot.uptime / (1000 * 60 * 60)) + " hora(s),"
  var mins = " " + Math.round(bot.uptime / (1000 * 60)) % 60 + " minuto(s), "
  var sec = Math.round(bot.uptime / 1000) % 60 + " segundo(s)"
  if (hrs == "0 hora(s),") hrs = ""
  if (mins == " 0 minuto(s), ") mins = ""
  let uptime = hrs+mins+sec
  
  let em = new discord.RichEmbed()
  .setTitle(`**${bot.user.username} Uptime**\n`)
  .setDescription(`**Ajudando ${bot.guilds.size} há: ${uptime}!**`)
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter(`Comando pedido por ${message.author.username}.`)
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "online"
}
