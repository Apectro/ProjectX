const Discord = require("discord.js");
const config = require("../config.json")
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {

        const embed0 = new Discord.RichEmbed()
        .setColor(colors.COLOR2)
        .setTitle(`Command: ${config.PREFIX}verify`)
        .setDescription("You dont have permission to execute this command!")
        .setTimestamp()
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed0).then(msg => msg.delete(3000));
        const embed1 = new Discord.RichEmbed()
        .setColor(colors.COLOR2)
		.setAuthor(`${config.VERIFY}`, message.guild.iconURL)
        .setDescription(config.VERIFYTEXT)
		const reactmessage = await message.channel.send(embed1);
		await reactmessage.react('✅');

		const filter = (reaction, user) => reaction.emoji.name === '✅' && !user.bot;
		const collector = reactmessage.createReactionCollector(filter, { time: 15000 });

		collector.on('collect', async reaction => {      
			const user = reaction.users.last();
			const guild = reaction.message.guild;
			const member = guild.member(user) || await guild.fetchMember(user);
			member.addRole(config.ROLEID);
		});
	}