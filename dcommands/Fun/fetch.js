exports.run = (client, message, args) => {
  message.channel.send(`HERE YOU ARE! :tennis:`)
}

exports.help = {
  name: 'Fetch',
  description: `Tells Remus to go fetch a ball.`,
  requirements: 'Anyone can use this command.',
  usage: 'To use this command, type the following: !fetch.'
}
