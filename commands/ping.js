module.exports.run = (bot, message, args) => {
  message.channel.send({
      embed: {
          color: 3447003,
          author: {
              name: `${bot.user.username}`,
              icon_url: `${bot.user.avatarURL}`
          },
          title: `:ping_pong: Pong!`,
          description: ``,
      },
  }).then((m) =>{
      m.edit({
          embed: {
              color: 3447003,
              author: {
                  name: `${bot.user.username}`,
                  icon_url: `${bot.user.avatarURL}`
              },
              description: ``,
              fields: [
                  {
                      name: `:information_source: API Ping:`,
                      value: `\`${m.createdTimestamp - message.createdTimestamp}ms\``,
                      inline: true
                  },
                  {
                      name: `:heartpulse: Bot Ping:`,
                      value: `\`${Math.round(bot.ping)}ms\``,
                      inline: true
                  }
              ],
              footer: {
                text: `Estou online há ${Math.round(bot.uptime / (1000 * 60 * 60))} horas, ${Math.round(bot.uptime / (1000 * 60)) % 60}  minutos, & ${Math.round(bot.uptime / 1000) % 60} segundos! ツ`
              }
          },
      })
  })
}

module.exports.help = {
  name: "ping",
  usage: ``,
  information: ""
}
