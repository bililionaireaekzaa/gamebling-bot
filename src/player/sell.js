const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sell')
		.setDescription('Sell items from the shop(s) in the bot')
		.addStringOption(option => 
			option.setName('item_id')
				.setDescription('The item to sell')
				.setRequired(true))
		.addStringOption(option => 
			option.setName('amount')
				.setDescription('The amount to sell - use \'a\' to sell all')
				.setRequired(true)),
	async execute(interaction) {
		const itemId = interaction.options.getString('item_id');
		const amount = interaction.options.getString('amount');
		// ...sell logic...
		await interaction.reply(`Selling ${amount} of ${itemId}.`);
	},
};
