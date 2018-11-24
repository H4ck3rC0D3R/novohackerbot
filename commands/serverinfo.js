const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const moment = require("moment")
    moment.locale("pt-BR")
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    let bot2 = message.guild.members.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;
    let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
    let cargos = message.guild.roles.map(a => a).join(", ")
        const embed = new Discord.RichEmbed()
        .setTitle(`Informacoes do melhor servidor o ${message.guild.name}`)
        .setColor("#FF0000")
        .addField('Dono', `<@${message.guild.owner.id}>`)
        .addField('Criado em:', moment(message.guild.createdAt).format('LLLL'))
        .addField("ID do Servidor", message.guild.id)
        .addField(`Membros [${totalmembros}]`, `Online: ${online}\nAusente: ${ausente}\n Ocupado: ${ocupado}\n Offline: ${offline}\n Bots: ${bot2}`)
        .addField(`Canais [${canaistexto+canaisvoz}]`, `Texto: ${canaistexto}\n Voz: ${canaisvoz}`)
        .addField(`Cargos [${message.guild.roles.size}]`, cargos)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed)
}

module.exports.help = {
  name: "serverinfo"
};