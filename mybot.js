const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

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
 }
});

client.login(process.env.BOT_TOKEN);
