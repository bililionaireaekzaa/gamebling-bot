const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coinflip')
		.setDescription('Flip a coin!')
		.addStringOption(option => 
			option.setName('prediction')
				.setDescription('Choose whether you think the coin will be heads or tails')
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
