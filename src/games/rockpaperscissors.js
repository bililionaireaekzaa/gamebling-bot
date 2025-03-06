const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rockpaperscissors')
		.setDescription('Play a game of rock paper scissors against the bot!')
		.addStringOption(option => 
			option.setName('selection')
				.setDescription('Your choice of Rock, Paper or Scissors')
				.setRequired(true))
		.addStringOption(option => 
			option.setName('bet')
				.setDescription('The amount to bet. Use `m` for max and `a` for all in')
				.setRequired(true)),
	async execute(interaction) {
		const selection = interaction.options.getString('selection');
		const bet = interaction.options.getString('bet');
		// ...game logic...
		await interaction.reply(`You bet ${bet} on ${selection}.`);
	},
};
