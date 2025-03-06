const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lotto')
		.setDescription('Participate in the weekly lottery!')
		.addStringOption(option => 
			option.setName('tickets_to_buy')
				.setDescription('The number of tickets to buy. Use \'m\' to buy max')
				.setRequired(false)),
	async execute(interaction) {
		const ticketsToBuy = interaction.options.getString('tickets_to_buy');
		// ...lotto logic...
		await interaction.reply(`Buying ${ticketsToBuy || 'default number of'} tickets.`);
	},
};
