const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weekly')
		.setDescription('Collect your weekly ration of cash.'),
	async execute(interaction) {
		// ...weekly logic...
		await interaction.reply('Collecting your weekly ration of cash.');
	},
};
