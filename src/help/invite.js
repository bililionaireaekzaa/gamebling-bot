const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Shares the details of how to add the bot'),
	async execute(interaction) {
		// ...invite logic...
		await interaction.reply('Here is how to invite the bot.');
	},
};
