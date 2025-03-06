const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('craft')
		.setDescription('Craft packs to use when buying new units or research!')
		.addStringOption(option => 
			option.setName('type')
				.setDescription('The type of pack to craft leave blank to see menu')
				.setRequired(false))
		.addStringOption(option => 
			option.setName('amount')
				.setDescription('The amount to craft - Use \'m\' for max')
				.setRequired(false)),
	async execute(interaction) {
		const type = interaction.options.getString('type');
		const amount = interaction.options.getString('amount');
		// ...craft logic...
		await interaction.reply(`Crafting ${amount || 'default amount'} of ${type || 'packs'}.`);
	},
};
