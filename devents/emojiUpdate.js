module.exports = (client, emoji) => {
const log = client.guilds.find(x => x.id === emoji.guild.id).channels.find(x => x.name === 'logs');
return log ? log.send(`\`EMOJI UPDATED:\` <:${emoji.name}:${emoji.id}> has been renamed :${emoji.name}:`) : console.log('No logs channel!');
};
