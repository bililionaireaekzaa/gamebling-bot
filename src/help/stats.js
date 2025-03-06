const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stats')
		.setDescription('Shows a selection of bot stats including ping, player count, guild count etc.'),
	async execute(interaction) {
		// ...stats logic...
		await interaction.reply('Showing bot stats.');
	},
};
