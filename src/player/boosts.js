const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boosts')
		.setDescription('View or activate your boosts!')
		.addSubcommand(subcommand =>
			subcommand
				.setName('show')
				.setDescription('View your boosts'))
		.addSubcommand(subcommand =>
			subcommand
				.setName('use')
				.setDescription('Activate a boost')
				.addStringOption(option => 
					option.setName('boost')
						.setDescription('Select the boost you want to activate')
						.setRequired(true))
				.addStringOption(option => 
					option.setName('amount')
						.setDescription('Enter the number of boosts to activate')
						.setRequired(false))),
	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'show') {
			// ...show boosts logic...
			await interaction.reply('Showing your boosts.');
		} else if (interaction.options.getSubcommand() === 'use') {
			const boost = interaction.options.getString('boost');
			const amount = interaction.options.getString('amount') || '1';
			// ...use boost logic...
			await interaction.reply(`Using ${amount} of ${boost} boost.`);
		}
	},
};
