module.exports = (client, role) => {
  const log = role.guild.channels.find(x => x.name === 'logs');
  return log ? log.send(`\`ROLE CREATED: ${role.name}\``) : console.log('No logs channel!');
}
