const Discord = require('discord.js');
const config = require("../config.json")
const colors = require("../colors.json")

exports.run = async (client, message, args, tools) => {

    const say1 = new Discord.RichEmbed()
    .setColor(colors.COLOR2)
    .setTitle(`Command: ${config.PREFIX}poll`)
    .setDescription("You dont have permission to execute this command!")
    .setTimestamp()

    if (!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(say1).then(msg => msg.delete(3000));
    const poll = new Discord.RichEmbed()
    .setColor(colors.COLOR2)
    .setTitle(`Command: ${config.PREFIX}poll`)
    .setDescription(`**Description:** Create a poll \n**Cooldown:** No cooldown \n**Usage:** ${config.PREFIX}poll trump vs putin`)
    if (!args.join(' ')) return message.channel.send(poll).then(msg => msg.delete(3000));

    const embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} - Poll`)
    .setDescription(args.join(' '))
    .setFooter('React with 🅰️ or 🅱️ for choice 1 or 2')
    .setColor(colors.COLOR2)
    const pollTitle = await message.channel.send({ embed });
    await pollTitle.react(`🅰️`);
    await pollTitle.react(`🅱️`);
  
};
  