const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('inventory')
		.setDescription('Shows your mining inventory'),
	async execute(interaction) {
		// ...inventory logic...
		await interaction.reply('Showing your mining inventory.');
	},
};
