exports.run = (client, message, args) => {
  message.reply(` no, you're a good boy!`)
  .then(m => m.delete(10000))
}

exports.help = {
  name: 'Good Boy',
  callname: 'goodboy',
  description: `Tells Remus he's a good boy.`,
  requirements: 'Anyone can use this command.',
  usage: '!goodboy'
}
