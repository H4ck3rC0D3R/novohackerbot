module.exports.help = {
  name: "8ball"
}

module.exports.run = (bot, message, args, discord) => {
 let em = new discord.RichEmbed()
 let results = ["Sim", "Não", "Depende", "Talvez", "Não Sei"] 
 let res = results[Math.floor(Math.random()*results.length)]
 
 em
 .setTitle("8Ball")
 .setDescription('Pergunta: \n' + args.join() + '\n \n Resposta: \n' + res)
 .setColor("RANDOM")
 
 message.channel.send({embed: em})
}
