const Discord = require("discord.js");

module.exports.run = (bot, message, args, Discord) => {

	var randomPuppy = require("random-puppy")
  randomPuppy('memes')
.then(url => {
    var memeEmbed = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle('Meme entregue:')
        .setFooter(`Comando solicitado por: ${message.author.username}`, message.author.avatarURL)
        .setImage(url)
        .setColor('36393e')
    message.channel.send(memeEmbed);
});
}

module.exports.help = {
        name: "meme",
        usage: ``,
        information: ""
      }