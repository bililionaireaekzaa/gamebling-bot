const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('higherorlower')
		.setDescription('Play a game of higher or lower. Guess the next card drawn to keep playing!'),
	async execute(interaction) {
		// ...game logic...
		await interaction.reply('Starting a game of Higher or Lower!');
	},
};
