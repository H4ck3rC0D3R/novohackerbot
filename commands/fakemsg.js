module.exports.run = (bot, message, args, Discord) => {
        try {
  let user;

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
      
    } else if(args[0]) {
        user = bot.users.get(args[0]);
    
    }
  let botmessage = args.slice(1).join(' ')
 
  if (args[0] == null) {return message.channel.send(`${message.author}, :x: **Mencione um usu�rio !**`)}
  

    if (args[1] == null) {return message.channel.send(`${message.author}, :x: **Diga algo !**`)}
    message.channel.createWebhook(user.username, user.avatarURL).then(w => {
        w.send(botmessage);
        w.delete();
    })
    
} catch (err) {
    message.reply(':x: **Eu n�o tenho permiss�o para criar um Webhook neste servidor, ou n�o encontrei este usu�rio.**')
   }
}


  module.exports.help = {
    name: "fakemsg",
    usage: ``,
    information: ""
  }


