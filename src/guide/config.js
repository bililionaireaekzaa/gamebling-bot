// ...existing code...

// Add new command for cryptomoji
client.on('message', message => {
    if (message.content.startsWith('$gc cryptomoji')) {
        const args = message.content.split(' ');
        const emoji = args[2];
        // Add logic to set the cryptomoji
        message.channel.send(`Cryptomoji set to ${emoji}`);
    }
});

// Add new command for crypto_name
client.on('message', message => {
    if (message.content.startsWith('$gc crypto_name')) {
        const args = message.content.split(' ');
        const name = args[2];
        // Add logic to set the crypto_name
        message.channel.send(`Crypto name set to ${name}`);
    }
});

// Add new command for disable_update_messages
client.on('message', message => {
    if (message.content.startsWith('$gc disable_update_messages')) {
        const args = message.content.split(' ');
        const enabled = args[2] === 'true';
        // Add logic to enable/disable update messages
        message.channel.send(`Update messages ${enabled ? 'enabled' : 'disabled'}`);
    }
});

// ...existing code...
