module.exports.run = (bot, message, args, Discord) => {

            message.delete('')
              let reason = args.slice(0).join(' ');
          if (reason.length < 1) return message.reply('Use -suguestao (sua suguestao pro bot)');
          message.channel.send(':white_check_mark: Suguestao enviada com sucesso!')
              var embed = new Discord.RichEmbed()
                .setTitle('Suguestao')
                .setDescription(args.join(" "))
                .setColor("RANDOM")
                .setFooter('Suguestao enviada por: ' + message.author.tag,message.author.avatarURL)
                .setThumbnail(bot.user.displayAvatarURL)
               bot.users.get('376842782687625226').send(embed);
      };
    
      module.exports.help = {
        name: "sugestao",
        usage: ``,
        information: ""
      }