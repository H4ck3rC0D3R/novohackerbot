const Discord = require('discord.js');


exports.run = async (bot, message, args) => {
  try {

let user;

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if(args[0]) {
        user = bot.users.get(args[0]);
    }
    
    if (args[0] == null) {return message.channel.send(`**${message.author.username}**, :x: **Mencione** um **bot** ou diga seu **ID** !`)}
  const embed = new Discord.RichEmbed()
  .addField(`<:links:510838271191023616> Convite do(a) bot ${user.username} :`, `[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=2146958591)`)
  .setFooter(message.author.tag,message.author.avatarURL )
  .setColor('#FE2E64')
   .setThumbnail(user.avatarURL)       
    if (user.bot) return message.channel.send(embed)
    message.channel.send(`**${message.author.username}**, :x: Este usuario nao é **bot**!`)

} catch (err) {
    message.channel.send(`**${message.author.username}**, :x: Isto não é um **bot**!`)
}
}


module.exports.help = {
  name: "botinvite"
};