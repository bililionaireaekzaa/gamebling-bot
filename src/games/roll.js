const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Roll a dice and bet on the result!')
		.addStringOption(option => 
			option.setName('dice-type')
				.setDescription('The type of dice to roll')
				.setRequired(true))
		.addIntegerOption(option => 
			option.setName('prediction')
				.setDescription('What number will the dice land on?')
				.setRequired(true))
		.addStringOption(option => 
			option.setName('bet')
				.setDescription('The amount to bet. Use `m` for max and `a` for all in')
				.setRequired(true)),
	async execute(interaction) {
		const diceType = interaction.options.getString('dice-type');
		const prediction = interaction.options.getInteger('prediction');
		const bet = interaction.options.getString('bet');
		// ...game logic...
		await interaction.reply(`You bet ${bet} on ${diceType} landing on ${prediction}.`);
	},
};
