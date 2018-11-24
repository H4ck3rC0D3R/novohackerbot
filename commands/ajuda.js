module.exports.run = async (bot, message, args, Discord) => {

    message.channel.send('``' + `${message.author.username}` + '``' + ', te enviamos uma ajudinha no privado!')

		var embed = new Discord.RichEmbed()

			 .setAuthor('  HackerBOT  ' , bot.user.displayAvatarURL) 
			 .setColor('ff0000')
			 .setDescription('Quer ajuda em algum comando? Use minhas reações para eu poder ajuda-lo!' + '\n\n' + '<:menu:509312097507737610> = Menu \n' + '<:administracao:504262207744507904> = Administração \n' + '<:diversao:504262232880971787> = Diversão \n' + '<:minecraft:504261956287463435> = Minecraft \n')
			 .setThumbnail("https://cdn.discordapp.com/attachments/501461774361559042/506265725329997824/DiscordHype.gif")

    message.author.send(embed).then(m => m.delete(60000)).then(msg=> {

	msg.react('509312097507737610') //Menu
		.then(() => msg.react('504262207744507904')) //Administração
		.then(() => msg.react('504262232880971787')) //Diversão
		.then(() => msg.react('504261956287463435')); //Minecraft


	const menufilter = (reaction, user) => reaction.emoji.id === '509312097507737610' && user.id === message.author.id;
	const menu = msg.createReactionCollector(menufilter, { time: 60000 });

	const admfilter = (reaction, user) => reaction.emoji.id === '504262207744507904' && user.id === message.author.id;
	const adm = msg.createReactionCollector(admfilter, { time: 60000 });

	const diversaofilter = (reaction, user) => reaction.emoji.id === '504262232880971787' && user.id === message.author.id;
	const diversao = msg.createReactionCollector(diversaofilter, { time: 60000 });

	const minecraftfilter = (reaction, user) => reaction.emoji.id === '504261956287463435' && user.id === message.author.id;
	const minecraft = msg.createReactionCollector(minecraftfilter, { time: 60000 });
	

  menu.on('collect', bot1 => {

	const embed1 = new Discord.RichEmbed()

	    .setAuthor('  HackerBOT  ' , bot.user.displayAvatarURL) 
			.setColor('ff0000')
			.setDescription('Quer ajuda em algum comando? Use minhas reações para eu poder ajuda-lo!' + '\n\n' + '<:menu:509312097507737610> = Menu \n' + '<:administracao:504262207744507904> = Administração \n' + '<:diversao:504262232880971787> = Diversão \n' + '<:minecraft:504261956287463435> = Minecraft \n')
			.setThumbnail("https://cdn.discordapp.com/attachments/501461774361559042/506265725329997824/DiscordHype.gif")

	msg.edit(embed1);

	})
	
  adm.on('collect', bot2 => {

	const embed2 = new Discord.RichEmbed()
	  	.setAuthor('Comandos de Administração:', bot.user.displayAvatarURL)
	  	.setColor('ff0000')
	  	.setDescription('• -anunciar | Faz um anúncio no canal desejado \n• -anuncioall | Faz um anuncio a todos do servidor \n• -votacao | Cria uma votacao no canal do comando executado \n• -ban | Bane um membro desejado do servidor \n• -kick - Kicka um membro desejado do servidor \n• -limpar | Limpa o chat do servidor')
			.setThumbnail("https://cdn.discordapp.com/attachments/501461774361559042/506265725329997824/DiscordHype.gif")
		msg.edit(embed2);
			
	})
	
  diversao.on('collect', bot3 => {

	const embed3 = new Discord.RichEmbed()
		.setAuthor('Comandos de Diversão:', bot.user.displayAvatarURL)
		.setColor('ff0000')
		.setDescription('• -meme | Ver memes aleatórios da internet \n • -8ball | Veja as respostas da bola magica \n • -beijar | Beije a pessoa que voce gosta \n • -efalar | Converse por emoji (USE APENAS LETRA MINUSCULA)')
		.setThumbnail("https://cdn.discordapp.com/attachments/501461774361559042/506265725329997824/DiscordHype.gif")
	msg.edit(embed3);

	})
	
  minecraft.on('collect', bot4 => {

	const embed4 = new Discord.RichEmbed()
		.setAuthor('Comandos Minecraft:', bot.user.displayAvatarURL)
		.setColor('ff0000')
		.setDescription('• -mchead | Ver cabeça de um player do minecraft \n• -mcserver | Ver o status de um servidor de minecraft')
		.setThumbnail("https://cdn.discordapp.com/attachments/501461774361559042/506265725329997824/DiscordHype.gif")
	msg.edit(embed4);

	})
	})

.catch(err => {
	message.channel.send('``' + `${message.author.username}` + '``' + ', seu privado está desativado!');
})
}


module.exports.help = {
  name: "teste"
};
