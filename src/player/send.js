const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('send')
		.setDescription('Send money to a friend!')
		.addUserOption(option => 
			option.setName('recipient')
				.setDescription('The player receiving the cash')
				.setRequired(true))
		.addStringOption(option => 
			option.setName('amount')
				.setDescription('The amount to send - use \'m\' to send max')
				.setRequired(true)),
	async execute(interaction) {
		const recipient = interaction.options.getUser('recipient');
		const amount = interaction.options.getString('amount');
		// ...send logic...
		await interaction.reply(`Sending ${amount} to ${recipient.username}.`);
	},
};
