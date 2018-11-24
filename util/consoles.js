module.exports = (bot, config) => {
  console.log("Bot iniciado! Use meus comandos");
  console.log("Nome Do Bot: " + bot.user.username + `\n`);
  console.log("Dono do Bot: " + config.owner + `\n`);
  console.log(`Bot Developers: ${config.owner}\n`);
  console.log(`~ ${bot.guilds.array().length} Servidores, ${bot.channels.array().length} Canais, e ${bot.users.array().length} Usuarios\n`);
}
