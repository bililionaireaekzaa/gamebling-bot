const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('findthelady')
		.setDescription('Play a game of Find the Lady')
		.addStringOption(option => 
			option.setName('bet')
				.setDescription('The amount to bet. Use `m` for max and `a` for all in')
				.setRequired(true))
		.addStringOption(option => 
			option.setName('mode')
				.setDescription('Toggle hard mode (default: Easy Mode)')
				.setRequired(false)),
	async execute(interaction) {
		const bet = interaction.options.getString('bet');
		const mode = interaction.options.getString('mode') || 'easy';
		// ...game logic...
		await interaction.reply(`You bet ${bet} in ${mode} mode.`);
	},
};
