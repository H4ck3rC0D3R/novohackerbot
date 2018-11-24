module.exports.run = (bot, message, args, Discord) => {


    let reason = args.slice(0).join(' ');

      if (reason.length < 1) return message.channel.send("**:x: " + message.author.tag + "** **Diga uma mensagem para eu misturar** !");


	var embed = new Discord.RichEmbed()
            .setTitle('Frase Misturada:')
            .setDescription(args.join(' ').split('').reverse().join(''))
            .setColor("RANDOM")
            .setFooter('Comando requerido por: ' + message.author.tag,message.author.avatarURL)
            .setThumbnail('https://cdn.discordapp.com/attachments/493134346840965142/493472674295578636/noboo.gif')
      message.channel.send(embed);

}


module.exports.help = {
        name: "misturar",
        usage: ``,
        information: ""
      }