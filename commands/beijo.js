const Discord = require("discord.js");

module.exports.run = async (bot, message, args, Discord) => {
  if(message.mentions.users.size < 1) return message.reply("Você precisa mencionar alguém.")
    let user = message.mentions.users.first()
if(user.id == message.author.id) return message.channel.send("Você não pode beijar a si mesmo.")
  let member = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle(`:kiss: Clima no ar`)
    .setDescription(`:kiss: ${message.author.tag} robou um beijo de ` + args.join(" "))
    .setColor('RANDOM')
    .setThumbnail(bot.user.avatarURL)
    .setImage('https://pa1.narvii.com/6214/5c506d2760822b9bc97f30eebd75a31ae73a0b2a_hq.gif')
    return message.channel.send(botembed);
  }

module.exports.help = {
    name: "beijar"
}