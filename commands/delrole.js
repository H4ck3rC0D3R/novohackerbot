let discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("Você nao mencionou quem vai deletar o cargo")
  let role = message.mentions.roles.first();
  if (!role) return message.channel.send("Você não mensionou o cargo que quer deletar")
  let roleid = role.id
  let rolename = role.name
  if (!message.guild.roles.get(roleid)) return message.channel.send(`Este cargo não exixte!`);
  
  member.removeRole(roleid);
  let em = new discord.RichEmbed()
  .setTitle("Deletar Cargo")
  .setDescription(`Okay! Eu deletei o cargo ${rolename} `)
  .setTimestamp()
  .setFooter(`${message.author.username} deletou o cargo ${rolename}`)
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "delrole"
} 
