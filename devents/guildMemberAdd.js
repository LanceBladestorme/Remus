module.exports = (client, member) => {
const log = member.guild.channels.find(x => x.name === 'logs');
const findName = client.users.find(x => x.id === member.id)
return log ? log.send(`\`USER JOINED: ${findName.username}-${findName.id}\``) : console.log('No logs channel!');
};
