module.exports.run = (bot, message, args, Discord) => {

var embed = new Discord.RichEmbed()
.setAuthor('Novidades')
.setDescription(':small_orange_diamond:-porn Adicionado \n :small_orange_diamond:-porn Melhorado \n :small_orange_diamond:-avatar Adicionado \n :small_orange_diamond:-novidades Adicionado \n :small_orange_diamond:-delrole Adicionado \n :small_orange_diamond:-misturar Adicionado \n :small_orange_diamond:-addrole Adicionado \n :small_orange_diamond:-anuncioall Adicionado \n :small_orange_diamond:-invite Adicionado \n :small_orange_diamond:-botinfo Melhorado \n :small_orange_diamond:-tempo Adicionado \n :small_orange_diamond:-suguestao Adicionado \n :small_orange_diamond:-roleinfo Adicionado \n :small_orange_diamond:-google Adicionado \n :small_orange_diamond:-beijar Adicionado \n :small_orange_diamond:-efalar Adicionado \n :small_orange_diamond:-iconedoservidor Adicionado')
.setThumbnail(bot.user.displayAvatarURL)
	message.channel.send(embed);
}

module.exports.help = {
    name: "novidades",
    usage: ``,
    information: ""
  }