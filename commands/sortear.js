module.exports.run = (bot, message, args, Discord) => {

let mem = message.guild.members.random().user
	message.channel.send('@everyone')
          var embed = new Discord.RichEmbed()
            .setTitle(':tada: Sorteio :tada:')
            .setDescription('O usuario vencedor do sorteio foi o: \n' + mem.tag  + '  (ID do ganhador: ' + mem.id + ' )')
            .setColor("RANDOM")
            .setThumbnail(bot.user.displayAvatarURL)
      message.channel.send(embed);


}


  module.exports.help = {
    name: "sortear",
    usage: ``,
    information: ""
  }