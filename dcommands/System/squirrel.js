exports.run = (client, message, args) => {
message.channel.send("WHERE?!?!")
}
exports.help = {
  name: 'Squirrel',
  description: 'This command is used to check ping to the server. If no response, the bot is experiencing ping issues.',
  requirements: 'Anyone can use this command.',
  usage: '!squirrel'
};
