const Discord = require("discord.js");
const google = require("google");

module.exports.run = async (bot, message, args) => {

  google.resultsPerPage = 1
  google.protocol = 'https'
  var nextCounter = 0

  google(args, function (err, res) {
    if (err) console.log(err);

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      if (link.title == null) {
      return void(0)
    }
      if (link.href == null)    {
      return void(0)
    }
      const gEmbed = new Discord.RichEmbed()
        .setAuthor(`Resultados da pesquisa: ${args}`.split(',').join(' '))
        .setColor('RANDOM')
        .setThumbnail(bot.user.avatarURL)
        .addField('Titulo:', link.title)
        .addField('Descricao:', link.description)
        .addField('Link:', link.href);
        message.channel.send(gEmbed);
    }

    if (nextCounter < 1) {
      nextCounter += 1
      if (res.next) res.next()
    }

  });

}

module.exports.help = {
  name: "google"
}
