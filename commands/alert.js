const Discord = require("discord.js");
const config = require("../config.json")
const colors = require("../colors.json")

module.exports.run = async (client, message, args) => {

      const alert1 = new Discord.RichEmbed()
      .setColor(colors.COLOR2)
      .setTitle(`Command: ${config.PREFIX}alert`)
      .setDescription("You dont have permission to execute this command!")
      .setTimestamp()

      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(alert1);
      const alert2 = new Discord.RichEmbed()
      .setColor(colors.COLOR2)
      .setTitle(`Command: ${config.PREFIX}alert`)
      .setDescription(`**Description:** Send an announcement using the bot \n**Cooldown:** No cooldown \n**Usage:** ${config.PREFIX}alert @swirls#0001 is a dog`)
      if (!args.join(' ')) return message.channel.send(alert2);

      const say = new Discord.RichEmbed()
      .setColor(colors.COLOR2)
      .setTitle(`ANNOUNCEMENT`)
      .setDescription(args.join(" "))
      .setFooter("Announcement by " + message.author.tag)
      .setTimestamp()
      message.delete().catch();
      message.channel.send(say);


};

