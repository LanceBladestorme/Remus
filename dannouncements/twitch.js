const request = require('request');
exports.run = (client, message) => {
  let getTwitchUser;
  let twitchUser;
  let twitchAvatar;
  let findRemoteRole = message.channel.guild.roles.find(x => x.name === 'Remus Remote');
  if (!findRemoteRole.members.find(x => x.id === message.author.id)) {
    return;
  }
  let splitMessage = message.content.split(' ');
  for (let i = 0; i < splitMessage.length; i++){
    if(splitMessage[i].includes('http://www.twitch.tv/')){
      let getTwitchUser = splitMessage[i].split('http://www.twitch.tv/')
      twitchUser = getTwitchUser[1]
    }
  }
  const options = {
    url: `https://api.twitch.tv/helix/users?login=${twitchUser}`,
    headers: {
      'client-id': 'lkxlb7q5ruhcl7xszy3kq1dk9l3dcd'
    }
  }
  function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    let info = JSON.parse(body);
    return message.channel.send('', { embed: {
      'timestamp': message.createdTimestamp,
      "author": {
        "name": "Twitch Stream Notification",
        "icon_url": "http://pngimg.com/uploads/twitch/twitch_PNG56.png"
      },
      "color": 4462443,
      'footer': {
        'text': message.guild.name,
        'icon_url': message.guild.iconURL
      },
      'description': message.content,
      "thumbnail": {
        "url": info.data[0].profile_image_url
      }
    }
  })
  .then(message.delete(10))
  }
}
request(options, callback)
}
