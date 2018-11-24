const Discord = require('discord.js');

module.exports.run=async(bot,message,args)=>{
    
    message.delete();
    const pqp = args.join(' ');
    args = pqp.split('');
    let falar = '';
    if(args<1) return message.channel.send("Você não colocou nada para eu dizer!")
    for (let i = 0; i < args.length; i++) {
        if(args[i] == 'a' || args[i] == 'b' || args[i] == 'c' || args[i] == 'd' || args[i] == 'e' || args[i] == 'f' || args[i] == 'g' || args[i] == 'h' || args[i] == 'i' || args[i] == 'j' || args[i] == 'k' || args[i] == 'l' || args[i] == 'm' || args[i] == 'n' || args[i] == 'o' || args[i] == 'p' || args[i] == 'q' || args[i] == 'r' || args[i] == 's' || args[i] == 't' || args[i] == 'u' || args[i] == 'v' || args[i] == 'w' || args[i] == 'x' || args[i] == 'y' || args[i] == 'z') {
            falar += `:regional_indicator_${args[i]}: `;
        }
        if(args[i] == '0') {
            falar += ':zero: ';
        }
        if(args[i] == '1') {
            falar += ':one: ';
        }
        if(args[i] == '2') {
            falar += ':two: ';
        }
        if(args[i] == '3') {
            falar += ':three: ';
        }
        if(args[i] == '4') {
            falar += ':four: ';
        }
        if(args[i] == '5') {
            falar += ':five: ';
        }
        if(args[i] == '6') {
            falar += ':six: ';
        }
        if(args[i] == '7') {
            falar += ':seven: ';
        }
        if(args[i] == '8') {
            falar += ':eight: ';
        }
        if(args[i] == '9') {
            falar += ':nine: ';
        }
        if(args[i] == ' ') {
            falar += '   ';
        }
    }
    message.channel.send(`${falar}`);
}
module.exports.help={
    name:"efalar"
}