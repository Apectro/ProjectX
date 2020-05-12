const Discord = require("discord.js");
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Fetching discord's database.");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor(colors.COLOR2)
        .setTitle("Avatar")
        .setFooter("Searched by " + message.author.tag)
        .setDescription("[Avatar URL link]("+mentionedUser.displayAvatarURL+")");

        message.channel.send(embed)


    msg.delete();
}