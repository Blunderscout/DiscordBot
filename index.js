//Importing required classses
const {Client, Intents} = require('discord.js');
const { registerCommands } = require('./commands/deploy-commands.js')
const { REST } = require('@discordjs/rest');
const token = process.env.DISCORD_TOKEN;
const applicationId = process.env.APPLICATION_ID;	


//creating new client instance	
const client = new Client({ intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });


//prints out 'ready' when client has finished setting up
client.once('ready', () => {
	console.log('Ready');
	});

// sets up an HTTP client to communicate with discord
const rest = new REST({ version: '9' }).setToken(token);

console.log("Registering commands...");

//uses rest HTTP client to register commands with discord
registerCommands(rest, applicationId);

console.log("Register finished :)");

//Listen for a user command
client.on('interactionCreate', async interaction => {
	//ignores message if message does not match slash command
	if (!interaction.isCommand()) return;

	//post reply if message matches slash command
	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}	
});

// Listens for member added to channel, post welcome
client.on('guildMemberAdd', async member => {
	username = member.displayName
	const channel = client.channels.cache.get('846412498768101419')
	console.log('member', username)
	channel.send(`Hello, ${username}`)
	
})

client.on("messageCreate", message => {
    console.log(message.content);
});

client.on('debug', async debug => {
	console.log(debug);
})

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