const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("663372259297067048")
setInterval(function() {
channel.send(`سبام سيرفر NoN-SToP`);
}, 30)
})

client.login(process.env.BOT_TOKEN);