module.exports.run = (bot, message, args, Discord) => {

let role = message.mentions.roles.first()
if(!role) return message.channel.send('Voce precisa mencionar um cargo');
const embed = new Discord.RichEmbed()
.setAuthor(`Informacoes do cargo ${role.name}`)
.setColor("RANDOM")
.addField("Nome do cargo:", `${role.name}`)
.addField("ID do cargo:", `${role.id}`)
.addField("Cor:", `${role.color}`)
.addField("Cargo criado em:", `${role.createdAt}`)
.addField("Permissoes:", `${role.permissions}`)
message.channel.send(embed)
}


   module.exports.help = {
        name: "roleinfo",
        usage: ``,
        information: ""
      }