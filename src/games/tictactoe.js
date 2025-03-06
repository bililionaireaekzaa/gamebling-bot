const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tictactoe')
		.setDescription('Play a game of tic-tac-toe with a friend (or foe!!!!)'),
	async execute(interaction) {
		// ...game logic...
		await interaction.reply('Starting a game of Tic Tac Toe!');
	},
};
