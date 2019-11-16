exports.run = (client, message, args) => {
  let findLogs = (chnl) => message.channel.guild.channels.find(x => x.name === chnl)
  let findRemoteRole = message.channel.guild.roles.find(x => x.name === 'Remus Remote');
  if (!findRemoteRole){
    return;
  }
  if (!findRemoteRole.members.find(x => x.id === message.author.id)) {
    return;
  }
  if (!args[0]) {
    return message.reply(" please provide a channel to clear!")
    .then(message.delete(10))
    .then(m => m.delete(3000))
  }
  if (findLogs(args[0])) {
    return findLogs(args[0]).bulkDelete(100, true) && message.reply(' the channel has been cleared!')
    .then(message.delete(2000))
    .then(m => m.delete(3000))
  }
  if (!findLogs(args[0])) {
    return message.reply(" please provide a valid channel to clear!")
    .then(message.delete(10))
    .then(m => m.delete(3000))
  }
};
exports.help = {
  name: 'Clear A Channel',
  description: 'This commands clears most of channels messages. If messages are old, this command will not work!',
  requirements: 'User must have the Remus Remote role',
  usage: 'To use type the following: !clear channel-here.'
}
