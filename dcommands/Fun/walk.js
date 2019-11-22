exports.run = (client, message, args) => {
  message.channel.send(':eyes: DID SOMEBODY SAY WALK?! :eyes:')
  .then(m => m.delete(10000))
}

exports.help = {
  name: 'Walk',
  callname: 'walk',
  description: 'Asks Remus if he wants to go on a walk.',
  requirements: 'Anyone can use this command.',
  usage: '!walk'
}
