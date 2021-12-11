const { SlashCommandBuilder } = require('@discordjs/builders');
const { Routes } = require('discord-api-types/v9');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),

].map(command => command.toJSON());

function registerCommands(rest, applicationId) {
	rest.put(Routes.applicationGuildCommands(applicationId, "846412498768101416"), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
}

exports.registerCommands = registerCommands;