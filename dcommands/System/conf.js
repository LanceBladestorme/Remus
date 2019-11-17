exports.run = (client, message, args) => {
  let findChannel = c => message.channel.guild.channels.find(x => x.name === c);
  let findRole = role => message.channel.guild.roles.find(x => x.name === role);
  if (message.author.id !== message.guild.ownerID) {
    return;
  }
  if (!findRole('logs')) {
    message.channel.guild.createRole({
      name: 'logs',
      color: 'BLUE'
    })
  }
  if (!findRole('sleep mode')) {
    message.channel.guild.createRole({
      name: 'sleep mode',
      color: 'GREEN'
    })
  }
  if (!findRole('muted')) {
    message.channel.guild.createRole({
      name: 'muted',
      color: 'RED'
    })
    message.channel.guild.channels.tap(chnl => message.channel.guild.channels.get(chnl.id)
      .overwritePermissions(findRole('muted'), {
        SEND_MESSAGES: false
      }))
  }
  if (!findRole('Remus Remote')) {
    message.channel.guild.createRole({
      name: 'Remus Remote',
      color: 'YELLOW'
    })
  }
  if (!findChannel('Bot Channels')) {
    message.channel.guild.createChannel('Bot Channels', 'category')
  };
  if (!findChannel('logs')) {
    message.channel.guild.createChannel('logs', 'text')
    .then(m => m.setParent(findChannel('Bot Channels')))
    .then(m => m.overwritePermissions(findRole('logs'), {
          VIEW_CHANNEL: true,
          READ_MESSAGE_HISTORY: true,
          SEND_MESSAGES: false
        }))
    .then(m => m.overwritePermissions(findRole('@everyone'), {
            VIEW_CHANNEL: false
          }))
  }
  if(!findChannel('announcements')) {
    message.channel.guild.createChannel('announcements', 'text')
    .then(m => m.setParent(findChannel('Bot Channels')))
    .then(m => m.overwritePermissions(findRole('@everyone'), {
          SEND_MESSAGES: false
        }))
  }
  if(!findChannel('bot-commands')) {
    message.channel.guild.createChannel('bot-commands', 'text')
    .then(m => m.setParent(findChannel('Bot Channels')))
  }
  message.delete(10)
  message.channel.guild.channels.tap(chnl => message.channel.guild.channels.get(chnl.id)
    .overwritePermissions(findRole('muted'), {
      SEND_MESSAGES: false,
      SPEAK: false
    }))
}

exports.help = {
  name: 'Configure Server',
  description: 'This commands creates neccessary roles and channels neccessary for the bot to run properly.',
  requirements: 'User must have administrator status',
  usage: '!conf'
};
