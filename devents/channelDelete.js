module.exports = (client, channel) => {
console.log('A channel was deleted!')
const log = client.guilds.find(x => x.id === channel.guild.id).channels.find(x => x.name === 'logs');
return log ? log.send(`\`CHANNEL DELETED: ${channel.name}\``) : console.log('No logs channel!');
};
