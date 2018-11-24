module.exports.run = (bot, message, args, discord) => {

          if (message.mentions.users.size  == 0) return message.reply('Mencione alguem')
      if (!args.slice(1).join(' ')) return message.reply('Diga o motivo da denuncia! Use -denunciar (usuario) (motivo)')
    var canal = message.guild.channels.find("name", "reports");
      if (!canal) return;
    message.channel.send('** ✅ Denuncia enviada com sucesso!**')
    canal.send({embed:{
        'title':'Denuncia:',
        'description':'\n Denunciado por: ' + args.slice(1).join(' ') + '\n\n\n Enviada por:\n ' + message.author.tag,
        'thumbnail':{
            'url':message.mentions.users.first().avatarURL
        }
        ,'footer':{
            'text':''
        },
        'color':message.member.displayColor
  }})
  }

  module.exports.help = {
    name: "denunciar",
    usage: ``,
    information: ""
  }

