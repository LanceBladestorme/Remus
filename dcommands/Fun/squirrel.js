exports.run = (client, message, args) => {
message.channel.send("WHERE?!?!")
.then(m => m.delete(10000))
}
exports.help = {
  name: 'Squirrel',
  callname: 'squirrel',
  description: 'Tell Remus there is a squirrel nearby.',
  requirements: 'Anyone can use this command.',
  usage: '!squirrel'
};
