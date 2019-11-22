exports.run = (client, message, args) => {
  if (!message.guild.roles.find(x => x.name === 'sleep mode')) return;
  if (!message.guild.members.find(x => x.id === message.author.id).roles.find(x => x.name === 'Remus Remote')){
    return;
  }
  if (!message.guild.members.find(x => x.id === client.user.id).roles.find(x => x.name === 'sleep mode')) {
  message.guild.members.find('id', client.user.id).addRole(message.guild.roles.find(x => x.name === 'sleep mode'));
  client.user.setStatus('offline')
  client.user.setPresence({ game: { name: 'Z Z Z ...'} })
  message.channel.send(':zzz: Entering sleep mode! :zzz:').then(m => m.delete(5000)) && message.guild.members.find(x => x.id === client.user.id).setNickname('[Sleep Mode] Remus')
}
if (message.guild.members.find(x => x.id === client.user.id).roles.find(x => x.name === 'sleep mode')) {
message.guild.members.find(x  => x.id === client.user.id).removeRole(message.guild.roles.find(x => x.name === 'sleep mode'));
client.user.setStatus('online')
client.user.setPresence({ game: { name: 'Hunting Squirrels!!!!!!'} })
message.channel.send(':dog: No longer in sleep mode! :dog:').then(m => m.delete(5000)) && message.guild.members.find(x => x.id === client.user.id).setNickname(client.user.username)
}
}
exports.help = {
  name: 'Sleep Mode',
  callname: 'sleep',
  description: 'Toggles sleep mode. While in sleep mode, the bot will not respond to commands.',
  requirements: 'User must have the Remus Remote role.',
  usage: '!sleep'
};
