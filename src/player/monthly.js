const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('monthly')
		.setDescription('Collect your monthly ration of cash.'),
	async execute(interaction) {
		// ...monthly logic...
		await interaction.reply('Collecting your monthly ration of cash.');
	},
};
