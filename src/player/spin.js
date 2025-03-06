const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spin')
		.setDescription('Spin the wheel of fortune to win a random item!'),
	async execute(interaction) {
		// ...spin logic...
		await interaction.reply('Spinning the wheel of fortune!');
	},
};
