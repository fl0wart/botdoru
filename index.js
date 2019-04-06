const Discord = require('discord.js');
const config = require('./config.json');

const bot = new Discord.Client();


bot.on('ready', () => {
console.log(`Logged in as ${bot.user.tag}!`);
console.log("Streamstatus by doru")

bot.user.setActivity(`mon ville!`, {
type: "STREAMING",
url: "https://www.twitch.tv/ninja"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});

bot.login('NTY0MTE3MjE5MjA3MDIwNTU0.XKjOcg.NYExfGokiW0Bwg9R2B7I5jSshpI');

bot.on('message', async (message) => {
    if(message.author.bot) return;
    if(message.channel.type === 'nctry') return;

    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./Commands/${command}.js`);
        commandFile.run(bot, message, args);
      } catch (err) {
        console.log(`[Command Handler] ${err}`);
      }

});

bot.login("NTY0MTE3MjE5MjA3MDIwNTU0.XKjOcg.NYExfGokiW0Bwg9R2B7I5jSshpI");
