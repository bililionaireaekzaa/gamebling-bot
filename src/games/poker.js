const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('poker')
		.setDescription('Play a game of Texas Hold\'em Bonus versus the dealer!')
		.addStringOption(option => 
			option.setName('ante')
				.setDescription('The amount to bet. Use `m` for max and `a` for all in')
				.setRequired(true))
		.addStringOption(option => 
			option.setName('bonus')
				.setDescription('The amount to bet on the bonus hand. Use `m` for max and `a` for all in')
				.setRequired(false)),
	async execute(interaction) {
		const ante = interaction.options.getString('ante');
		const bonus = interaction.options.getString('bonus');
		// ...game logic...
		await interaction.reply(`You bet ${ante} with a bonus bet of ${bonus}.`);
	},
};
