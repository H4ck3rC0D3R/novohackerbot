module.exports.run = (bot, message, args, Discord) => {

    let reason = args.slice(0).join(' ');
      if (reason.length < 1) return message.reply(':x: **Cite um servidor de minecraft.**');
    
    let embed = new Discord.RichEmbed()
  
    .setAuthor(`Servidor ${args[0]}` , 'https://media.discordapp.net/attachments/501461774361559042/505520823667261463/minecraftTNT.png')
    .setDescription(' ')
  .setImage(`https://use.gameapis.net/mc/query/banner/mc.${args[0]}:25565/nether,caps`)
   .setFooter("Comando desejado por: " + message.author.tag,message.author.avatarUR)
    .setColor('#00BFFF')
    message.channel.send(embed)
  };   
    
      module.exports.help = {
        name: "mcserver",
        usage: ``,
        information: ""
      }