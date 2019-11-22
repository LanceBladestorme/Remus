exports.run = (client, message, args) => {
  message.channel.send(`HERE YOU ARE! :tennis:`)
  .then(m => m.delete(10000))
}

exports.help = {
  name: 'Fetch',
  callname: 'fetch',
  description: `Tells Remus to go fetch a ball.`,
  requirements: 'Anyone can use this command.',
  usage: '!fetch'
}
