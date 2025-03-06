const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sevens')
		.setDescription('Play a game of sevens!')
		.addStringOption(option => 
			option.setName('prediction')
				.setDescription('What do you think it will land on?')
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
