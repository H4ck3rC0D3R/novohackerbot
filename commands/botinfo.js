module.exports.run = (bot, message, args, Discord) => {

var embed = new Discord.RichEmbed()
	.setAuthor('HackerBOT', 'https://cdn.discordapp.com/attachments/493134346840965142/493469918067425295/JPEG_20180923_133828.jpg')
	.setColor("RANDOM")
	.addField('Linguagem:', 'JavaScript')
	.addField('Servidor(es) Conectado(s)', `${bot.guilds.size}`)
	.addField('Me convide para seu servidor:', '[Clique Aqui](https://discordapp.com/oauth2/authorize?client_id=493134896617750528&scope=bot&permissions=8)') 
	.addField('Servidor de Suporte:', '[Clique Aqui](https://discord.gg/zZF2Bx9)')
	.addField('Meu Site:', '[Clique Aqui](https://hacker-bot.glitch.me/)')
	.addField('Criadores:', 'Hackers PC')
	.setFooter('Estou em Desenvolvimento!', 'https://cdn.discordapp.com/attachments/493134346840965142/493472674295578634/Squidward_Dab.gif')
    message.channel.send(embed);
  };


  module.exports.help = {
    name: "botinfo",
    usage: ``,
    information: ""
  }