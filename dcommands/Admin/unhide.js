exports.run = async (client, message, args) => {
  let findRemoteRole = message.channel.guild.roles.find(x => x.name === 'Remus Remote');
  if (!findRemoteRole){
    return;
  }
  if (!findRemoteRole.members.find(x => x.id === message.author.id)) {
    return;
  }
let findChannel = message.channel.guild.channels.find(x => x.name === `hidden-${args[0]}`)
let findRole = role => message.channel.guild.roles.find(x => x.name === role)
if (!findChannel) return message.reply(' that channel does not exist!').then(message.delete(10)).then(m => m.delete(10000))
let hideChannel = chnl => message.channel.guild.channels.get(chnl.id)
  .overwritePermissions(findRole('@everyone'), {
    VIEW_CHANNEL: null
  })
await hideChannel(findChannel) && findChannel.setName(`${args[0]}`)
.then(message.channel.send(`The channel #\`${args[0]}\` is no longer hidden!`)
.then(message.delete(10))
.then(m => m.delete(5000)))
}
exports.help = {
  name: 'Removes Hidden Status From a Channel',
  description: 'This command undos the hide command so that everyone can see the channel again. This command will not work unless, the intended channel has the <Hidden> tag on it.',
  requirements: 'User must the Remus Remote rank. Channel Must have the <Hidden> tag on the front of its name',
  usage: 'To use this command, type the following: !unhide channel-here. (DO NOT INCLUDE \'HIDDEN-\' IN THE CHANNEL NAME)'
};
