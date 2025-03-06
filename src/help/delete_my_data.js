const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('delete_my_data')
		.setDescription('The command used to clear all of your data from the bot. Use this if you want to start from scratch'),
	async execute(interaction) {
		// ...delete my data logic...
		await interaction.reply('Your data has been deleted.');
	},
};
