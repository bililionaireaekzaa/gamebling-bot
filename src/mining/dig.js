const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dig')
		.setDescription('Dig in the mines to collect coal, ores and unprocessed materials (UM)!'),
	async execute(interaction) {
		// ...dig logic...
		await interaction.reply('Digging in the mines!');
	},
};
