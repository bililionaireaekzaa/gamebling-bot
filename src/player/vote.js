const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vote')
		.setDescription('Show the site voting instructions and your current cooldowns for voting.')
		.addStringOption(option => 
			option.setName('detailed')
				.setDescription('Show exact expiry times for cooldowns')
				.setRequired(false)),
	async execute(interaction) {
		const detailed = interaction.options.getString('detailed');
		// ...vote logic...
		await interaction.reply(`Showing voting instructions${detailed ? ' with detailed times' : ''}.`);
	},
};
