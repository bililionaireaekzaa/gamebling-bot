const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('donate')
		.setDescription('Shares a link to donate to the bot'),
	async execute(interaction) {
		// ...donate logic...
		await interaction.reply('Here is the link to donate to the bot.');
	},
};
