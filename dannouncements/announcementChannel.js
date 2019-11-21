exports.run = (client, message) => {
  let findRemoteRole = message.channel.guild.roles.find(x => x.name === 'Remus Remote');
  if (!findRemoteRole.members.find(x => x.id === message.author.id)) {
    return;
  }
  message.channel.send('', { embed: {
      'timestamp': message.createdTimestamp,
      'footer': {
        'text': message.guild.name,
        'icon_url': message.guild.iconURL
      },
      'fields': [
        {
          'name': `ANNOUNCEMENT FROM ${message.author.username.toUpperCase()}`,
          'value': message.content
        }
      ],
      "thumbnail": {
        "url": message.author.avatarURL
      }
    }
  })
  .then(message.delete(10))
}
