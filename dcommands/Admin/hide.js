exports.run = async (client, message, args) => {
  let findRemoteRole = message.channel.guild.roles.find(x => x.name === 'Remus Remote');
  if (!findRemoteRole){
    return;
  }
  if (!findRemoteRole.members.find(x => x.id === message.author.id)) {
    return;
  }
let findChannel = message.channel.guild.channels.find(x => x.name === args[0])
if (args[0] === 'bot-commands' || args[0] === 'announcements' || args[0] === 'logs') return message.reply(' you can not use this command on that channel!').then(message.delete(10)).then(m => m.delete(10000))
let findRole = role => message.channel.guild.roles.find(x => x.name === role)
if (!findChannel) return message.reply(' that channel does not exist!').then(m => m.delete(10000))
let hideChannel = chnl => message.channel.guild.channels.get(chnl.id)
  .overwritePermissions(findRole('@everyone'), {
    VIEW_CHANNEL: false
  })
await hideChannel(findChannel) && findChannel.setName(`hidden-${findChannel.name}`)
.then(message.channel.send(`The channel #\`${findChannel.name}\` has been hidden!`) && (m => m.delete(10000)))
}
exports.help = {
  name: 'Hide a Channel',
  callname: 'hide',
  description: 'Prevents users from being able to view a channel unless they have administrator or special permissions.',
  requirements: 'User must the Remus Remote rank.',
  usage: '!hide <channel>'
};
