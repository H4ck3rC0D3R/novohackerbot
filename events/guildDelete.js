module.exports = (bot, guild, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle("HackerBOT")
  .setDescription("Desculpe se eu não fiz oque você queria! Se foi por falta de alguma coisa contate meu criador H4ck3rC0D3R#8511!")
  .setAuthor(bot.user.username)
  .setTimestamp()
  .setColor("RED")
  bot.users.get(guild.ownerID).send({ embed })
}
