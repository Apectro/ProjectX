const Discord = require("discord.js")
const config = require("../config.json")
const colors = require("../colors.json")

module.exports.run = async (client, message) => {

    let replies = ["We actually sell bots :)","Our developers are crazy", "swirls#0001 has no brain!"]
    let result = Math.floor((Math.random() * replies.length));
    
let helpembed = new Discord.RichEmbed()
.setColor(colors.COLOR2)
.setAuthor(`ProjectX v${config.VERSION} - Prefix ${config.PREFIX}`, client.user.displayAvatarURL)
.setDescription(`General Commands - ${config.PREFIX}help General \nMusic Commands - ${config.PREFIX}help Music \nModeration Commands - ${config.PREFIX}help Moderator \nDeveloper Commands - ${config.PREFIX}help Developer`)
.setFooter(`FunFact: ${replies[result]}`)
.setTimestamp()

message.channel.send(helpembed);
}

