const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
client.commands = new Discord.Collection();
client.announcements = new Discord.Collection();
const modules = ['Admin', 'System', 'Moderation', 'Fun'];

modules.forEach(c => {
  fs.readdir(`./dcommands/${c}/`, (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
      const prop = require(`./dcommands/${c}/${f}`);
      let cmdName = fileName = f.split(".")[0];
      client.commands.set(cmdName, prop)
    })
  })
})


  fs.readdir(`./dannouncements/`, (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
      const prop = require(`./dannouncements/${f}`);
      let announcementType = fileName = f.split(".")[0];
      client.announcements.set(announcementType, prop)
    })
  })

fs.readdir("./devents/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./devents/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  })
});

client.login(process.env.login);
