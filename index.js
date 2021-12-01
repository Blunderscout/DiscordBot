

const fs = require ('fs');
const Discord = require('discord.js');
const { prefix, TOKEN } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();


client.login(TOKEN);


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});


client.on('message', message => 
{
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try 
    {
		client.commands.get(command).execute(message, args);
	} 
    catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});
