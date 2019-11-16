module.exports = (client, channel) => {
console.log('A message was pinned!')

let findLogs = client.guilds.find(x => x.id === channel.guild.id).channels.find('name', 'logs')
findLogs ? findLogs.send(`\`PIN UPDATED: ${channel.name}\``) : console.log('No logs channel!')
}
