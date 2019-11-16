module.exports = (client, channel) => {
console.log('A new channel was created!')
console.log(`${channel.id}-${channel.name} was created!`);
if (channel.type === 'text') {
  let findRole = channel.guild.roles.find(x => x.name === 'muted');
let findLogs = client.guilds.find(x => x.id === channel.guild.id).channels.find(x => x.name === 'logs')
if (findRole) {
  channel.overwritePermissions(findRole, {
        SEND_MESSAGES: false,
      })
    }
findLogs ? findLogs.send(`\`CHANNEL CREATED: ${channel.name}\``) : console.log('No logs channel!')
}
if (channel.type === 'voice') {
  let findRole = channel.guild.roles.find(x => x.name === 'muted');
  let findLogs = client.guilds.find(x => x.id === channel.guild.id).channels.find(x => x.name === 'logs')
  if (findRole) {
    channel.overwritePermissions(findRole, {
          SPEAK: false,
        })
      }
    findLogs ? findLogs.send(`\`CHANNEL CREATED: ${channel.name}\``) : console.log('No logs channel!')
}
}
