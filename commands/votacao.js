module.exports.run = (bot, message, args, discord) => {

if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("Você não tem permissão de usar esse comando")
          if (!args.slice(0).join(' ')) return message.reply('Use -votacao (oque deseja colocar para votar)')
          message.channel.send({embed:{
              'title':'Votaçao',
              'description':args.slice(0).join(' ')
              ,'color':message.member.highestRole.color,
              "thumbnail":{
                  url: bot.user.displayAvatarURL
                  }
          }}).then(m =>{
        m.react('504261956304240661').then(m.react('504261956321017856'))
          })
        };
      
      

  module.exports.help = {
    name: "votacao",
    usage: ``,
    information: ""
  }