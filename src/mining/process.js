const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('process')
		.setDescription('Process all your unprocessed materials (UM) to find diamonds, emeralds, lapis and redstone!'),
	async execute(interaction) {
		// ...process logic...
		await interaction.reply('Processing your unprocessed materials.');
	},
};
