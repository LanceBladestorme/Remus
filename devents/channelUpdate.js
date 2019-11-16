module.exports = (client, oldChannel, newChannel) => {
console.log('A channel has been updated!')

let findLogs = client.guilds.find(x => x.id === newChannel.guild.id).channels.find(x => x.name === 'logs')
findLogs ? findLogs.send(`\`CHANNEL SETTINGS UPDATED: ${newChannel.name}\``) : console.log('No logs channel!')
};
