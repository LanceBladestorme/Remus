exports.run = (client, message, args) => {
  message.channel.send(':eyes: DID SOMEBODY SAY WALK?! :eyes:')
}

exports.help = {
  name: 'Walk',
  description: 'This commands asks Remus if he wants to go on a walk.',
  requirements: 'Anyone can use this command.',
  usage: 'To use this command, type the following: !walk.'
}
