exports.run = (client, message, args) => {
  message.reply(` no, you're a good boy!`)
}

exports.help = {
  name: 'Good Boy',
  description: `This command tells Remus he's a good boy.`,
  requirements: 'Anyone can use this command.',
  usage: 'To use this command, type the following: !goodboy.'
}
