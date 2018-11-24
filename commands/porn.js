const search = require('random-puppy')

module.exports.run = (bot, message, args, discord) => {
  
  if (!message.channel.nsfw) return message.channel.send(":underage: O canal precisa ter restrição de idade para usar isto!")
 

	message.delete()
  var randomPuppy = require("random-puppy")
	randomPuppy('pussy')
.then(url => {
	message.delete()
  let em = new discord.RichEmbed()
  .setAuthor('NSFW', 'https://images-ext-2.discordapp.net/external/m8oD0ls5b9vSfPTjv7JLQ-Zk-Wz6tWiucHyp6f6FQ5k/https/cdn.discordapp.com/attachments/501461774361559042/505517767227736074/15405951936942102194971.jpg')
  .setDescription("Toma ai então safadu!")
  .setImage(url)
  .setFooter("😂 Bom Aproveito! 😂")
    message.channel.send({embed: em})
  })
}

module.exports.help = {
  name: "porn"
}
