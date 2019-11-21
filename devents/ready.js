module.exports = client =>  {
  const findLogs = client.guilds.map(function (m) {
    if (!m.channels.find(x => x.name === 'logs')) {
      return;
    } else {
      return client.channels.get(m.channels.find(x => x.name === 'logs').id).send('\`I am online!\`')
    }
  })
};
