module.exports = (client, guild, user) => {
  const log = guild.channels.find(x => x.name === 'logs');
  const bannedUser = client.users.find(x => x.id === user.id)
  return log ? log.send(`\`UNBANNED USER:\` ${bannedUser}`) : console.log('No logs channel!');
};
