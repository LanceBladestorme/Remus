exports.run = (client, message) => {
  let messagePortions = message.content.split(' | ');
  const findAnnouncementChannel = message.channel.guild.channels.find(x => x.name === 'announcements');
  let findRemoteRole = message.channel.guild.roles.find(x => x.name === 'Remus Remote');
  if (!findRemoteRole.members.find(x => x.id === message.author.id)) {
    return;
  }
  if(!findAnnouncementChannel){
    return message.reply(' there is no channel named \`#announcements\`! Please change this to use this command!')
    .then(message.delete(100))
    .then(m => m.delete(10000))
  };
  if(!message.content.startsWith('!')){
    let doEveryone = ' '
    if (message.content.includes('@everyone')){
      let doEveryone = '@everyone'
    }
    return findAnnouncementChannel.send(doEveryone, { embed: {
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
  let doEveryone = ''
  if (!messagePortions[1] || !messagePortions[2]){
    return message.reply(' I need a title in first argument and an announcement in the second!')
    .then(message.delete(100))
    .then(m => m.delete(10000))
  }
  if (messagePortions[3] === 'true' || messagePortions[3] === 'false' || !messagePortions[3]) {
    if (messagePortions[3] === 'true') {
      doEveryone = '@everyone'
    }
  return findAnnouncementChannel.send(doEveryone, { embed: {
    'fields': [
      {
        'name': messagePortions[1],
        'value': messagePortions[2]
      }
    ],
    "thumbnail": {
      "url": "https://cdn.discordapp.com/embed/avatars/0.png"
    }
  }
})
.then(message.delete(100))
}
else return message.reply(' I need either true or false if you choose to include that last argument!')
.then(message.delete(100))
.then(m => m.delete(10000))
};

exports.help = {
  name: 'Special Announcement',
  description: 'This command sends a special announcement to the announcements channel.',
  requirements: 'User must have the Remus Remote rank',
  usage: 'To use this command use the following: !announce | title-here | message-here | true-or-false-to-@-everyone'
};
