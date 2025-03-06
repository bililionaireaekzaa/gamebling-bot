const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('work')
		.setDescription('Collect your hard earned wages at work.'),
	async execute(interaction) {
		// ...work logic...
		await interaction.reply('Collecting your hard earned wages at work.');
	},
};
