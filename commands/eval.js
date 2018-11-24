module.exports.run = (bot, message, args, discord) => {

var util = require("util");
        let code = args.join(' ');
          if (message.author.id != '376842782687625226') return;
            try {
          let ev = eval(code)
                        let str = util.inspect(ev, {
                            depth: 1
                        })
                         str = `${str.replace(new RegExp(`${bot.token}|${process.env.TOKEN}`, "g"), "nope")}`;
                        if(str.length > 1800) {
                            str = str.substr(0, 1800)
                            str = str + "..."
                        }
                        message.delete(); 
            message.channel.send("", { embed: { 
              color: 2551400,      
          fields: [{        
            name: '**Enviado 📥**',     
              value: '\`\`\`' + code + '\`\`\`'         
        },{     
              name: '**Resultado 📤**', 
                  value: '\`\`\`' + str + '\`\`\`'  
                }], 
              footer: {     
            text: ``    }     }});} catch (err) {   message.react("❌");
        message.channel.send("", { embed: { 
              color: 2551400,      
          fields: [{        
            name: '**Enviado 📥**',     
              value: '\`\`\`' + code + '\`\`\`'         
        },{     
              name: '**Erro 📤**', 
                  value: '\`\`\`' + err + '\`\`\`'  
                }], 
              footer: {     
            text: ``    }     }});    } }

 module.exports.help = {
    name: "eval",
    usage: ``,
    information: ""
    }