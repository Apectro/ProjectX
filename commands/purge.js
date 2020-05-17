const Discord = require("discord.js");
const config = require("../config.json")
const colors = require("../colors.json")

module.exports.run = async (message, args) => {
  if(args[0] == "help"){
    let purge0 = new Discord.RichEmbed()
    .setColor(colors.COLOR2)
    .setTitle(`Command: ${config.PREFIX}purge`)
    .setDescription(`**Description:** Purge messages \n**Cooldown:** No cooldown \n**Usage:** ${config.PREFIX}purge 100`)

    message.channel.send(purge0).then(msg => msg.delete(3000));
    return;
  } 

  message.delete()

  const purge = new Discord.RichEmbed()
  .setColor(colors.COLOR2)
  .setTitle(`Command: ${config.PREFIX}purge`)
  .setDescription("You dont have permission to execute this command!")
  .setTimestamp()
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(purge).then(msg => msg.delete(3000));
  const purge2 = new Discord.RichEmbed()
  .setColor(colors.COLOR2)
  .setTitle(`Command: ${config.PREFIX}purge`)
  .setDescription(`Please enter a number of messages to clear! \nUsage: ${config.PREFIX}purge <amount>`)
  .setTimestamp()
  if(!args[0]) return message.channel.send(purge2).then(msg => msg.delete(3000));
  message.channel.bulkDelete(args[0]).then(() => {
  const purge3 = new Discord.RichEmbed()
  .setColor(colors.COLOR2)
  .setTitle(`Command: ${config.PREFIX}purge`)
  .setDescription(`Cleared ${args[0]} messages`)
  .setTimestamp()
  message.channel.send(purge3).then(msg => msg.delete(3000));
});


}