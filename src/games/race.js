const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('race')
		.setDescription('Race turtles, dogs, horses or DINOSAURS!!!')
		.addStringOption(option => 
			option.setName('racer-type')
				.setDescription('The type of racer to use')
				.setRequired(true))
		.addIntegerOption(option => 
			option.setName('prediction')
				.setDescription('Which racer you think will win')
				.setRequired(true))
		.addStringOption(option => 
			option.setName('bet')
				.setDescription('The amount to bet. Use `m` for max and `a` for all in')
				.setRequired(true)),
	async execute(interaction) {
		const racerType = interaction.options.getString('racer-type');
		const prediction = interaction.options.getInteger('prediction');
		const bet = interaction.options.getString('bet');
		// ...game logic...
		await interaction.reply(`You bet ${bet} on racer ${prediction} in ${racerType} race.`);
	},
};
