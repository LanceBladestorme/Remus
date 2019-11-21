# Remus, your loyal doggo assistant

## Features

### Logging:

* Logs newly created/deleted channels, roles, and emojis.
* Logs deleted messages for moderation.
* Logs online status for uptime management.

### Management/Moderation:
* Hide/Unhide - Hides/Hides a channel in the server and either adds or removes the tag 'hidden' from the name for easy identification.
* Announcements: Converts messages made in the announcements channel into neat looking embeds. Also converts messages sent with a twitch url into a special announcement. Custom announcements can be made using the announce command.
* Clear Command - If run, an entire channel will be purged of 100 messages as long as they are not over a year old.
* Black List/Command Management - Commands not run in proper channels are deleted to prevent spam. Black listed words are automatically deleted and logged for moderators/owners to devide

### Special Ranks:
* Muted Role - If given to a member, they will be prevented from speaking or chatting in all channels (Will not work if user has admin status)
* Logs Role - Logs are normally hidden from users, but if given this rank they can view the logs.
* Remus Remote - Gives user access to moderation commands.

### Help:
* All commands have extra info for your benefit if you run !help <command name > in the #bot-commands channel.

## Set Up

* [Invite Remus to Your Server](https://discordapp.com/api/oauth2/authorize?client_id=643242691903225856&permissions=8&scope=bot)
* Run !conf in any channel to set up channels and roles.
* Give yourself the Remus Remote command.
