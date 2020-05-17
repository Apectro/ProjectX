const Discord = require("discord.js");
const colors = require("../colors.json")
const config = require("../config.json")

module.exports.run = async (client, message, args) => {

    let replies = ["We actually sell bots :)","Our developers are crazy", "swirls#0001 has no brain!"]
    let result = Math.floor((Math.random() * replies.length));

    let bicon = client.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setColor(colors.COLOR2)
    .setThumbnail(bicon)
    .setAuthor(`ProjectX ${config.VERSION} Support`)
    .setDescription(`To see the bot commands use ${config.PREFIX}help \nFor issues and bugs go over to [Github](https://github.com/sonqs/ProjectX)`)
    .setFooter(`FunFact: ${replies[result]}`)

    message.channel.send(embed)

}