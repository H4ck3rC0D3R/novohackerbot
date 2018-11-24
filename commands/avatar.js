module.exports.run = (bot, message, args, discord) => {
    let usr = message.mentions.users.first() ? message.mentions.users.first() : message.author;
    if (usr){
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
              name: `${bot.user.username}`,
              icon_url: `${bot.user.avatarURL}`
          },
          title: `${usr.username}'s Avatar!`,
          image: {
            url: usr.avatarURL,
          },
      },
      })
    } else {
      message.channel.send(':x: Mencione o membro que você quer pegar o avatar!')
    }
}

module.exports.help = {
  name: "avatar",
  usage: ``,
  information: ""
}
