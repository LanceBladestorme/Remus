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

if(message.content.startsWith('!')) {
  let thumbnail = messagePortions[4]
  let msg = messagePortions[2]
  let title = messagePortions[1]
  let color;
  if (!messagePortions[1] || !messagePortions[2]){
    return message.reply(' I need a message and channel to run this command!')
      .then(message.delete(100)
      .then(m => m.delete(10000)
  }
  if (!messagePortions[4]){
    thumbnail = "https://cdn.discordapp.com/embed/avatars/0.png"
  }
  if(messagePortions[3] !== 'RED' || 'BLUE' || 'GREEN || YELLOW') {
    color = 1
  }
  if(messagePortions[3] === 'RED'){
    color = 13632027
  }
  if(messagePortions[3] === 'BLUE'){
    color = 4886754
  }
  if(messagePortions[3] === 'GREEN'){
    color = 1400594
  }
  if(messagePortions[3] === 'YELLOW'){
    color = 16312092
  }
  return findAnnouncementChannel.send('', { embed: {
    'timestamp': message.createdTimestamp,
    'color': color,
    'footer': {
      'text': message.guild.name,
      'icon_url': message.guild.iconURL
    },
    'fields': [
      {
        'name': messagePortions[1],
        'value': messagePortions[2]
      }
    ],
    "thumbnail": {
      "url": thumbnail
    }
  }
})
.then(message.delete(100))
}
}

exports.help = {
  name: 'Announcement',
  description: 'This command sends an announcement to the announcements channel.',
  requirements: 'User must have the Remus Remote rank',
  usage: 'To use this command use the following: !announce | title-here | message-here | color | thumbnail-url-here'
};
