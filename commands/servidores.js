module.exports.run = (bot, message, args) => {
  message.channel.send(`Eu estou em ${bot.guilds.array().length} servidores. Ajudando ${bot.users.array().length} usuarios, com ${bot.channels.array().length} canais`)
}

module.exports.help = {
  name: "servidores",
  usage: ``,
  information: ""
} 
