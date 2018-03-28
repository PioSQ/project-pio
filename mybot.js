const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = ">";
client.on("message", (message) => {
 if (!message.content.startsWith(prefix) || message.author.bot) return;

 if (message.content.startsWith(prefix + "ping")) {
   message.channel.send("Pong!");
 } else
 if (message.content.startsWith(prefix + "happy")) {
   message.channel.send(":smile:");
 } else
 if (message.content.startsWith(prefix + "keepplaylist")) {
   message.channel.send("Alright! Your playlist is saved. :apple:");
 }
});

client.login(process.env.BOT_TOKEN);
