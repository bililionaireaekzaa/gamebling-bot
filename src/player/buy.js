const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('buy')
		.setDescription('Buy items from the shop(s) in the bot')
		.addSubcommand(subcommand =>
			subcommand
				.setName('item')
				.setDescription('Buy an item')
				.addStringOption(option => 
					option.setName('item_id')
						.setDescription('The item to buy')
						.setRequired(true))
				.addStringOption(option => 
					option.setName('amount')
						.setDescription('The amount to buy - use \'a\' to buy all')
						.setRequired(true)))
		.addSubcommand(subcommand =>
			subcommand
				.setName('unit')
				.setDescription('Buy a unit')
				.addStringOption(option => 
					option.setName('unit_id')
						.setDescription('The unit to buy')
						.setRequired(true))
				.addStringOption(option => 
					option.setName('amount')
						.setDescription('The amount to buy - use \'a\' to buy all')
						.setRequired(true)))
		.addSubcommand(subcommand =>
			subcommand
				.setName('loot')
				.setDescription('Buy loot')
				.addStringOption(option => 
					option.setName('amount')
						.setDescription('The amount to buy - use \'a\' to buy all')
						.setRequired(true)))
		.addSubcommand(subcommand =>
			subcommand
				.setName('lotto')
				.setDescription('Buy lotto')
				.addStringOption(option => 
					option.setName('amount')
						.setDescription('The amount to buy - use \'a\' to buy all')
						.setRequired(true)))
		.addSubcommand(subcommand =>
			subcommand
				.setName('boost')
				.setDescription('Buy a boost')
				.addStringOption(option => 
					option.setName('boost_id')
						.setDescription('The boost to buy')
						.setRequired(true))
				.addStringOption(option => 
					option.setName('amount')
						.setDescription('The amount to buy - use \'a\' to buy all')
						.setRequired(true))),
	async execute(interaction) {
		const subcommand = interaction.options.getSubcommand();
		const id = interaction.options.getString(`${subcommand}_id`);
		const amount = interaction.options.getString('amount');
		// ...buy logic...
		await interaction.reply(`Buying ${amount} of ${id} from ${subcommand}.`);
	},
};
