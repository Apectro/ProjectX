const Discord = require("discord.js");
const fs = require("fs");
const Enmap = require("enmap");
const x = new Discord.Client();
const colors = require("./colors.json")
const config = require("./config.json")

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      x.on(eventName, event.bind(null, x));
    });
  });
  
  x.commands = new Enmap();
  
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Attempting to load command ${commandName}`);
      x.commands.set(commandName, props);
    });
  });

x.on('ready', () => {
    x.user.setStatus(config.STATUS);
    x.user.setPresence({
        game: {
            name: `ProjectX | v${config.VERSION}`,
            type: 'STREAMING',
            url: 'https://www.twitch.tv/ProjectXbot'
        }
    });
});

x.on('guildMemberAdd', member => {
    const Welcome = new Discord.RichEmbed()
    .setAuthor(`ProjectX v${config.VERSION}`)
    .setColor(colors.COLOR2)
    .setDescription(`
        We are happy to announce pre-release of ProjectX.
        As our developers are working hardly to deploy it to public purposes.

        Be free to contact our developers by sending them a message - swirls#0001
    `)
    .setTimestamp()
    .setFooter("ProjectX")
    member.send(Welcome)
});

x.on('guildMemberAdd', member => {
    var messages = [
        `Brace yourselves. <@${member.user.id}> just joined the server.`,
        `Challenger approaching - <@${member.user.id}> has appeared`,
        `Welcome <@${member.user.id}>. Leave your weapon by the door.`,
        `Big <@${member.user.id}> showed up!`,
        `<@${member.user.id}> just joined... or did they?`,
        `Ready player <@${member.user.id}>`,
        `<@${member.user.id}> hopped into the server. Kangaroo!!`,
        `<@${member.user.id}> joined. You must construct additional pylons.`,
        `Hello. Is it <@${member.user.id}> you're looking for?`,
        `Where's <@${member.user.id}> in the server!`,
        `It's dangerous to go alone, take <@${member.user.id}>`
    ]
    const WelcomeMessage = new Discord.RichEmbed()
    .setColor(colors.COLOR2)
    .setDescription(messages[ Math.floor( Math.random() * 11 ) ])
    .setTimestamp(new Date())
    member.guild.channels.get(config.CHANNELID).send(WelcomeMessage);
});



x.login(config.TOKEN);