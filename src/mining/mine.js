const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mine')
		.setDescription('Shows the information about your mine and the mine shop.'),
	async execute(interaction) {
		// ...mine logic...
		await interaction.reply('Showing your mine information.');
	},
};
