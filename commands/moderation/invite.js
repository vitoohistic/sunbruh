const { MessageEmbed } = require("discord.js");

module.exports = {
    aliases: ['inv'],
    name: 'invite',
    description: "Invite this bot to your server!",
    async execute(message, args, cmd, client, Discord){
        message.channel.send(
            new MessageEmbed()
              .setAuthor(
                "Invite me!",
                "https://i.imgur.com/y6BgUd1.png"
              )
              .setColor("#c6a9fc")
              .setTimestamp()
              .setDescription(
                "https://discord.com/oauth2/authorize?client_id=" +
                  client.user.id +
                  "&permissions=" +
                  "37080128" +
                  "&scope=" +
                  "bot"
              )
          );
    }
}