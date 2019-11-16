const prefix = '!'

module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix)) {
  if (message.channel.name === 'announcements') return message.delete(10).then(message.author.send(`You can't use commands in the #announcements channel!`));

  let checkSleepMode = message.guild.roles.find(x => x.name === 'sleep mode')
  if (checkSleepMode){
    console.log('Found!')
    if ((message.guild.members.find(x => x.id === client.user.id).roles.find(x => x.name === 'sleep mode')) && (!message.content.startsWith('!sleep'))) {
      return message.delete(10);
    }}

    if ((message.channel.name !== 'bot-commands') && (!message.content.startsWith('!conf'))) return message.delete(10)

    let divideMessage = message.content.split(' ');
    let cmd = divideMessage[0];
    let args = divideMessage.slice(1);
    let commandData = client.commands.get(cmd.slice(prefix.length));
    if (!commandData) return;
    commandData.run(client, message, args)
  }
  const blacklist = ['nigger', 'nigga', 'skinhead', 'cracker', 'chink', 'niggar', 'nibba', 'faggot', 'fag']
  const blacklistCheck = message.content.toLowerCase().replace(/\s+/g, '').replace(/!/g, '').replace(/-/g, '').replace(/\./g, '').replace(/\?/g, '').replace(/_/g, '')
  console.log(blacklistCheck)
  for(let i = 0; i < blacklist.length; i++) {
    if (blacklistCheck.includes(blacklist[i])) {
      message.delete(10)
    }
  }
  if(message.channel.name === 'announcements'){
    client.commands.get('announce').run(client, message)
  }
}
