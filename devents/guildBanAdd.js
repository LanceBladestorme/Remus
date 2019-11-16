module.exports = (client, guild, user) => {
console.log('User has been banned!')
const log = guild.channels.find(x => x.name === 'logs');
const bannedUser = client.users.find(x => x.id === user.id)
return log ? log.send(`\`USER BANNED:\` ${bannedUser}`) : console.log('No logs channel!');
};
