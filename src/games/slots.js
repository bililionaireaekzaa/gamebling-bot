const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('slots')
		.setDescription('Try your luck in the slots!')
		.addStringOption(option => 
			option.setName('bet')
				.setDescription('The amount to bet. Use `m` for max and `a` for all in')
				.setRequired(true)),
	async execute(interaction) {
		const bet = interaction.options.getString('bet');
		// ...game logic...
		await interaction.reply(`You bet ${bet} on the slots.`);
	},
};
