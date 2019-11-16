module.exports = (client, emoji) => {
console.log('An emoji was deleted!')
const log = client.guilds.find(x => x.id === emoji.guild.id).channels.find('name', 'logs');
return log ? log.send(`\`EMOJI DELETED: :${emoji.name}:\``) : console.log('No logs channel!');
};
