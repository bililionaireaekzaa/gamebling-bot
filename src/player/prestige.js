const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prestige')
		.setDescription('Prestige your mine to get some and increase your prestige count to make your way up the mine prestige leaderboard!')
		.addStringOption(option => 
			option.setName('type')
				.setDescription('The type of prestige')
				.setRequired(true)),
	async execute(interaction) {
		const type = interaction.options.getString('type');
		// ...prestige logic...
		await interaction.reply(`Prestiging your mine with type ${type}.`);
	},
};
