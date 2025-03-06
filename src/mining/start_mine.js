const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('start_mine')
		.setDescription('Start your mining career! Takes an optional name (uses your username if nothing is passed in)'),
	async execute(interaction) {
		// ...start mine logic...
		await interaction.reply('Starting your mining career!');
	},
};
