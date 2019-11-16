exports.run = (client, message, args) => {
let findHelp = client.commands.get(args[0])
if(!args[0]) return;
if(!findHelp) return;
findHelp = client.commands.get(args[0]).help
message.channel.send( { embed: {
  'image':{
    'url': 'https://i.redd.it/exhs5oxiezn31.jpg'
  },
  "author": {
    "name": `${client.user.username}'s Doggo Help Services! - !${args[0]}`,
    "icon_url": client.user.avatarURL
  },
  'fields': [
    {
      'name': 'INFORMATION:',
      'value': `${findHelp.description}`
    },
    {
      'name': 'HOW TO USE:',
      'value': `${findHelp.usage}`
    },
    {
      'name': 'REQUIREMENTS:',
      'value': `${findHelp.requirements}`
    }
  ]
}})
}
exports.help = {
  name: 'Help Commands',
  description: 'This command informs users about commands\'s general information and uses.',
  requirements: 'Anyone can use this command.',
  usage: 'To use this command type the following: !help command-here.'
};
