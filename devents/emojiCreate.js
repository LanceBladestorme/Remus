module.exports = (client, emoji) => {
const log = client.guild.find('id', emoji.guild.id).channels.find(x => x.name === 'logs');
return log ? log.send(`\`NEW EMOJI CREATED:\` <:${emoji.name}:${emoji.id}>`) : console.log('No logs channel!');
};
