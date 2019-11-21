module.exports = (client, channel) => {
const log = client.guilds.find(x => x.id === channel.guild.id).channels.find(x => x.name === 'logs');
return log ? log.send(`\`CHANNEL DELETED: ${channel.name}\``) : console.log('No logs channel!');
};
