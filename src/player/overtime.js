const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('overtime')
		.setDescription('Put in some extra time at work.'),
	async execute(interaction) {
		// ...overtime logic...
		await interaction.reply('Putting in some extra time at work.');
	},
};
