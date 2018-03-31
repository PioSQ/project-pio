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
 } else
 if (meesage.content.startsWith(prefix + "playlists")) {
   message.channel.send("https://www.youtube.com/playlist?list=PL6p1NYDZ87wIrjoY8APTIAcQf_l3_A7aj");
 }
});

client.login(process.env.BOT_TOKEN);
