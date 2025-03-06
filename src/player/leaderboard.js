const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('leaderboard')
		.setDescription('Show the leaderboard for a game!')
		.addStringOption(option => 
			option.setName('leaderboard')
				.setDescription('The leaderboard to choose')
				.setRequired(true))
		.addStringOption(option => 
			option.setName('global')
				.setDescription('Whether to show global scores')
				.setRequired(false)),
	async execute(interaction) {
		const leaderboard = interaction.options.getString('leaderboard');
		const global = interaction.options.getString('global');
		// ...leaderboard logic...
		await interaction.reply(`Showing ${leaderboard} leaderboard${global ? ' globally' : ''}.`);
	},
};
