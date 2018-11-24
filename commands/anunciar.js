module.exports.run = (bot, message, args, Discord) => {

if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("❌ Você não tem permissão!")
        message.delete('')
          let reason = args.slice(0).join(' ');
      if (reason.length < 1) return message.author.send('Use -anunciar (Oque deseja anunciar!)');
      if (reason.length < 1) return message.reply('Olhe seu privado te dei umas dicas lá!');
	message.channel.send('@everyone')
          var embed = new Discord.RichEmbed()
            .setTitle('🔔 Anuncio 🔔')
            .setDescription(args.join(" "))
            .setColor("RANDOM")
            .setFooter('Anunciado por: ' + message.author.tag,message.author.avatarURL)
            .setThumbnail(bot.user.displayAvatarURL)
      message.channel.send(embed);
  };

  module.exports.help = {
    name: "anunciar",
    usage: ``,
    information: ""
  }