const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('upgrade')
		.setDescription('Upgrade your mining units')
		.addStringOption(option => 
			option.setName('upgrade_id')
				.setDescription('The upgrade to buy')
				.setRequired(false))
		.addStringOption(option => 
			option.setName('amount')
				.setDescription('The amount to buy - does not support `max` or `all` must be a number')
				.setRequired(false)),
	async execute(interaction) {
		const upgradeId = interaction.options.getString('upgrade_id');
		const amount = interaction.options.getString('amount');
		// ...upgrade logic...
		await interaction.reply(`Upgrading ${amount || 'default amount'} of ${upgradeId || 'units'}.`);
	},
};
