const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Show the help for all the commands available in the bot')
		.addStringOption(option => 
			option.setName('command_name')
				.setDescription('The command to look up. Start typing to search for a command')
				.setRequired(false)),
	async execute(interaction) {
		const commandName = interaction.options.getString('command_name');
		// ...help logic...
		await interaction.reply(`Showing help for ${commandName || 'all commands'}.`);
	},
};
