module.exports.run = (bot, message, args, Discord) => {


let simg = `${message.guild.iconURL}?size=2048`
        let icone = new Discord.RichEmbed()
        .setDescription("Icone deste Servidor:")
        .setImage(simg)
        message.channel.send(icone)

}


module.exports.help = {
        name: "iconedoservidor",
        usage: ``,
        information: ""
      }