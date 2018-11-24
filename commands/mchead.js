module.exports.run = (bot, message, args, Discord) => {

    var razao = args.slice(1).join(" ")
    let reason = args.slice(0).join(' ');
      if (reason.length < 1) return message.reply(':x: **Cite um nick de minecraft.**');
    
    let embed = new Discord.RichEmbed()
  
    .setAuthor(`Skin de ${args[0]}` , 'https://media.discordapp.net/attachments/501461774361559042/505520823667261463/minecraftTNT.png')
    .setDescription(' ')
  .setImage(`https://mc-heads.net/head/${args[0]}`)
   .setFooter(' Comando gerado por ' + message.author.tag)
    .setColor('#00BFFF')
    message.channel.send(embed)
  };   

  module.exports.help = {
    name: "mchead",
    usage: ``,
    information: ""
  }