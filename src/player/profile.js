const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('profile')
		.setDescription('Show your player stats including cash, top scores and experience')
		.addStringOption(option => 
			option.setName('page')
				.setDescription('The sub-page to show')
				.setRequired(false)),
	async execute(interaction) {
		const page = interaction.options.getString('page');
		// ...profile logic...
		await interaction.reply(`Showing your profile${page ? ` on ${page} page` : ''}.`);
	},
};
