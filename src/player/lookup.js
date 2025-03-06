const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lookup')
		.setDescription('Show the stats for a given player including cash, top scores and experience, mine information and inventory')
		.addUserOption(option => 
			option.setName('user')
				.setDescription('The user to look up')
				.setRequired(true))
		.addStringOption(option => 
			option.setName('page')
				.setDescription('The sub-page to show')
				.setRequired(false)),
	async execute(interaction) {
		const user = interaction.options.getUser('user');
		const page = interaction.options.getString('page');
		// ...lookup logic...
		await interaction.reply(`Showing stats for ${user.username}${page ? ` on ${page} page` : ''}.`);
	},
};
