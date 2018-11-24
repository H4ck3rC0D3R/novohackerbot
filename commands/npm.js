const Discord = require("discord.js");
const search = require('libnpmsearch')

module.exports.run = async (bot, message, args) => {

message.channel.send(await search('libnpm'))
}

module.exports.help = {
  name: "npm"
};