//Import the required classses
const {Client, Intents} = require('discord.js');
const { token } = require('./config.json');

//creating new client instance	
const client = new Client({ intents:[Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_INVITES] });


//when client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready');
	});


//login to discord with your client's token
client.login(token);

/*
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);client.commands = new Discconst Discord = ord.Collection();
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

*/