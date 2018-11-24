const fs = require("fs");
const time = Date(),
pak = require('./package.json'),
discord = require('discord.js'),
config = require('./json/config.json'),
profanities = require("./profanities.json"),
bot = new discord.Client(),
prefix = '-',
{baselogger} = require('./src/logger.js'),
result = Math.round(Math.random()),
updates = ["Removed the language filter for good."],
webhookchannelid = "441710517460008960",
cleverbot = require('cleverbot.io'),
ms = require('ms')
config.updates = updates.join(' ')


bot.invite = "https://discord.gg/zZF2Bx9"


bot.commands = new discord.Collection();

require('fs').readdir("./commands/", (err, files) => {
  console.log("Carregando comandos");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

function changingstatus() {
  let status = [`Eu ajudo ${bot.users.size} pessoas`  , `-ajuda`, `Fui criado e desenvolvido pela equipe PC-Hacker's`, `Estou em ${bot.guilds.size} servidores!`]
  let random = status[Math.floor(Math.random() * status.length)]
  bot.user.setActivity(random, { url: 'https://www.twitch.tv/felipe11_lenda', type: "STREAMING"})
}

bot.on("ready", () => {
  console.log( `Fui iniciado no servidor em ${bot.guilds.size}` );
  setInterval(changingstatus, 10000);
})

bot.on('error', (err) => {
  console.error(`Erro... ${err}`).then(() => {
    bot.destroy().then(() => {
      bot.login(process.env.botToken)
    })
  })
})
bot.on("message", async message => {
  if(message.content ==`<@${bot.user.id}>`){
    var embed = new discord.RichEmbed()
      .setTitle('**HackerBOT**')
      .setDescription('\n\n "Hacker como faco para ver seus comandos?" \n ```Simples apenas use -ajuda```')
      .setColor('RANDOM')
      .setFooter(message.author.tag,message.author.avatarURL)
      .setThumbnail("https://cdn.discordapp.com/attachments/493134346840965142/493472674295578636/noboo.gif")
message.channel.send(embed);
    }
});

bot.on("message", message => {
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.channel.type == "dm") return;

  let mArray = message.content.split(" ");
  let args = mArray.slice(1);
  let loggedcmd = mArray[0].slice(prefix.length)

  let cmd = bot.commands.get(loggedcmd);
  if (message.author.bot) return;




  if (cmd) {
      if (config.userblacklist.includes(message.author.id)) return;
      message.channel.startTyping();
        cmd.run(bot, message, args, discord);  
      message.channel.stopTyping();
        console.log(`${message.author.username} usou o ${loggedcmd} comando`);
        if (message.guild.id == "501469743534964747") {
        return;
    } else {
        baselogger(bot, `**Logs de comando**\n\n**Comando:** ${loggedcmd}\n**Usuario:** ${message.author.tag}\n**Executado:** ${message.content}\n**Servidor:** ${message.guild.name}\n**Canal:** ${message.channel.name}`);
    }
  } 
 });
      
bot.on("guildCreate", (guild) => {
  require('./events/guildCreate.js')(bot, guild, discord)
  baselogger(bot, `**Guild Join**\n\n**Guild:** ${guild.name}\n**Owner:** ${guild.owner.user.username}\n**Large:** ${guild.large}\n**Member Count:** ${guild.memberCount}\n\n**Total Guilds:** ${bot.guilds.array().length}`, guild.iconURL);
});

bot.on("guildDelete", (guild) => {
  require('./events/guildDelete.js')(bot, guild, discord)
  baselogger(bot, `**Guild Leave**\n\n**Guild:** ${guild.name}\n**Owner:** ${guild.owner.user.username}\n**Large:** ${guild.large}\n**Member Count:** ${guild.memberCount}\n\n**Total Guilds:** ${bot.guilds.array().length}`, guild.iconURL);
});



bot.login('NDkzMTM0ODk2NjE3NzUwNTI4.Doml1g.-JEeIHPcN0JM9WwPngncsv1DKoA'); 

let upmsg = `Oh yeah, more updates! New updates:\n${updates}`
  async function senddat(up,msg) {
    if (up == null) return;
   await bot.channels.get('441982405985828864').send(msg).then(() => {
     up.pop(up)
   })
   await bot.channels.get('441982440005697539').send(msg).then(() => {
     up.pop(up)
   })
  }
exports.date = time
exports.bot = bot
exports.updates = updates.join(" ")
exports.sendupdates = senddat
