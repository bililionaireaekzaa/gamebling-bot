const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shop')
		.setDescription('Buy and sell items in the shop.')
		.addStringOption(option => 
			option.setName('shop_type')
				.setDescription('The type of shop to show')
				.setRequired(true))
		.addStringOption(option => 
			option.setName('page')
				.setDescription('The page to show')
				.setRequired(false)),
	async execute(interaction) {
		const shopType = interaction.options.getString('shop_type');
		const page = interaction.options.getString('page');
		// ...shop logic...
		await interaction.reply(`Showing ${shopType} shop${page ? ` on page ${page}` : ''}.`);
	},
};
