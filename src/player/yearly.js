const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yearly')
		.setDescription('Collect your yearly ration of cash.'),
	async execute(interaction) {
		// ...yearly logic...
		await interaction.reply('Collecting your yearly ration of cash.');
	},
};
