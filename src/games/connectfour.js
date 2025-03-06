const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('connectfour')
		.setDescription('Play a game of Connect 4 with a friend (or foe!!!!)'),
	async execute(interaction) {
		// ...game logic...
		await interaction.reply('Starting a game of Connect 4!');
	},
};
