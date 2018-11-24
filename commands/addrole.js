module.exports.run = (bot, message, args, discord) => {
  let role = message.mentions.roles.first();
  if (!role) return message.channel.send(`Você não mencionou o cargo`);
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("Você não mencionou o membro");
  let roleid = role.id;
  let rolename = role.name;
  
  if (!message.guild.roles.get(roleid)) return message.channel.send(`Este cargo não existe!`);
  member.addRole(role.id);
  let em = new discord.RichEmbed()
  .setTitle("Aicionar Cargo")
  .setDescription(`Okay! Eu adicionei o cargo ${rolename} no usuario ${member.user.username}.`)
  .setTimestamp()
  .setFooter(`${message.author.username} adicionou o cargo ${rolename} no usuario ${member.user.username}.`)
  message.channel.send({embed: em})
  if (member.displayName) {
    em.setDescription(`Okay! Eu adicionei o cargo ${rolename} no usuario ${member.displayName}.`)
    em.setFooter(`${message.author.username} adicionou o cargo ${rolename} no usuario ${member.displayName}.`)
  }
};

module.exports.help = {
  name: "addrole"
};
