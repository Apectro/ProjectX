const Discord = require("discord.js");
const colors = require("../colors.json")
const config = require("../config.json")

module.exports.run = async (bot, message, args) => {
    
    

    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.RichEmbed()
        .setColor(colors.COLOR2)
        .setTitle(`Command: ${config.PREFIX}ping`)
        .addField('API Ping : ', Math.floor(bot.ping) + 'ms')
        .addField('Bot Ping : ', Math.floor(botping) + 'ms')
        .addField('Message Ping : ', '~' + Math.round(msgping2) + 'ms')
        .setTimestamp(new Date())
        .setFooter(`requested by ${message.author.tag}`);

        
    return message.channel.send(pingembed);
        

};
