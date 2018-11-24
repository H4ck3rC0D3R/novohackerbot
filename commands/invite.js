const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let embed = new discord.RichEmbed()
  .setTitle("HackerBOT - Me Convide:")
  .setDescription(`Esperamos que você goste de mim em seu servidor!\n Clique [Aqui](https://discordapp.com/oauth2/authorize?client_id=493134896617750528&scope=bot&permissions=8) para me convidar!`)
  .setColor("GREEN")
  .setFooter("Comando desejado por: " + message.author.tag,message.author.avatarURL)
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "invite"
}
