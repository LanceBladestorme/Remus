exports.run = (client, message, args) => {
let commandList = "_For more info on how to use command, use the help command!_\n";
client.commands.tap(m => {
  commandList += `\n\`!${m.help.callname}\` - ${m.help.description}`
  })
message.channel.send('', { embed: {
  title: 'Commands List',
  description: commandList,
}})
.then(m => m.delete(30000))
}

exports.help = {
  name: 'Commands List',
  callname: 'commands',
  description: 'Creates a list of usable commands.',
  requirements: 'Anyone can use this command.',
  usage: '!commands'
};
