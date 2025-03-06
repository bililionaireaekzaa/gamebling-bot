const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roulette')
		.setDescription('Play a game of roulette!')
		.addStringOption(option => 
			option.setName('prediction')
				.setDescription('What roulette bet you\'d like to place (e.g. black, red, green, 0, 1-10 etc.)')
				.setRequired(true))
		.addStringOption(option => 
			option.setName('bet')
				.setDescription('The amount to bet. Use `m` for max and `a` for all in')
				.setRequired(true)),
	async execute(interaction) {
		const prediction = interaction.options.getString('prediction');
		const bet = interaction.options.getString('bet');
		// ...game logic...
		await interaction.reply(`You bet ${bet} on ${prediction}.`);
	},
};
