const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('support')
		.setDescription('Shares a link to the support server'),
	async execute(interaction) {
		// ...support logic...
		await interaction.reply('Here is the link to the support server.');
	},
};
