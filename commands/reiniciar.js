module.exports.run = (bot, message, args, discord) => {
if (message.author.id !== '376842782687625226') return;

    resetBot(message.channel)
    async function resetBot(channel) {
        let token = bot.token;
        await message.react('✅')
            .then(message => bot.destroy())
            .then(message => bot.destroy())
            .then(() => bot.login('NDkzMTM0ODk2NjE3NzUwNTI4.Doml1g.-JEeIHPcN0JM9WwPngncsv1DKoA'));
			message.delete()
		let em = new discord.RichEmbed()
			.setTitle("Reiniciando...")
			.setDescription(":wave: HackerBOT reiniciado!")
			.setThumbnail("https://media1.giphy.com/media/WKJpCXfvBHyla/giphy.gif")
			.setTimestamp()
			.setColor("GOLD")
		message.channel.send(em)
}
}

module.exports.help = {
  name: "reiniciar"
}
