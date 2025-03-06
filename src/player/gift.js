const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gift')
		.setDescription('Send up to five free gifts every 12 hours!')
		.addUserOption(option => 
			option.setName('recipient')
				.setDescription('The user to receive the free gift')
				.setRequired(false)),
	async execute(interaction) {
		const recipient = interaction.options.getUser('recipient');
		// ...gift logic...
		await interaction.reply(`Sending a gift to ${recipient ? recipient.username : 'someone'}.`);
	},
};
