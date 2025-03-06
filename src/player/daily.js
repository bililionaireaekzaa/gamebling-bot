const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('daily')
		.setDescription('Collect your daily ration of cash.'),
	async execute(interaction) {
		// ...daily logic...
		await interaction.reply('Collecting your daily ration of cash.');
	},
};
