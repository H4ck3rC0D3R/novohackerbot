module.exports.run = (bot, message, args, Discord) => {

    if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("❌ Você não tem permissão!")
            message.delete('')
              let reason = args.slice(0).join(' ');
          if (reason.length < 1) return message.reply('Use -anuncioall (Oque deseja anunciar!)');
          message.channel.send(':white_check_mark: Anunciado com sucesso!')
              var embed = new Discord.RichEmbed()
                .setTitle('**:bell: Anuncio :bell:**')
                .setDescription(args.join(" "))
                .setColor("RANDOM")
                .setFooter('Anunciado por: ' + message.author.tag,message.author.avatarURL)
                .setThumbnail(bot.user.displayAvatarURL)
               message.guild.members.map(users=>users.send(embed));
      };
    
      module.exports.help = {
        name: "anuncioall",
        usage: ``,
        information: ""
      }