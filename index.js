const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs'); // Import fs module for file system operations
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on(Events.ClientReady, readyClient => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

// Function to load extensions (JavaScript files)
const loadExtensions = () => {
  const srcDir = './src//'; // Update this to your source directory

  fs.readdirSync(srcDir).forEach(file => {
    if (file.endsWith('.js')) {
      const filePath = `${srcDir}/${file}`;
      delete require.cache[require.resolve(filePath)]; // Clear cache to reload updated file
      require(filePath)(client); // Load the file
    }
  });
};

loadExtensions(); // Call the function to load extensions

client.login(process.env.TOKEN);

