const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cooldowns')
		.setDescription('Lists any active cooldowns you currently have')
		.addStringOption(option => 
			option.setName('detailed')
				.setDescription('Show exact expiry times for cooldowns')
				.setRequired(false)),
	async execute(interaction) {
		const detailed = interaction.options.getString('detailed');
		// ...cooldowns logic...
		await interaction.reply(`Listing cooldowns${detailed ? ' with detailed times' : ''}.`);
	},
};
