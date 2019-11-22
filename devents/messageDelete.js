module.exports = (client, message) => {
  const log = message.guild.channels.find(x => x.name === 'logs');
  const findName = client.users.find(x => x.id === message.author.id)
  if (message.author.bot) return;
  if(message.content.startsWith('!')) return;
  if(message.channel.name === 'announcements') return;
  if(message.content.includes('http://www.twitch.tv/')) return;
  return log ? log.send(`\`MESSAGE DELETED: ${message.content} | AUTHOR: ${findName.username}-${findName.id}\``) : console.log('No logs channel!');
}
