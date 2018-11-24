const fs = require('fs')

module.exports = (bot, guild, discord) => {
  let member = guild.owner
  let embed = new discord.RichEmbed()
  .setTitle("HackerBOT")
  .setDescription('Obrigado por me adicionar em seu maravilhoso servidor! Espero que eu possa te ajudar... Para ver meus comandos use ``-ajuda``')
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
 
  member.send({embed})
}
