const Discord = require("discord.js")

module.exports = {
    name: "help music",
    aliases: ["h", "cmd", "command", "ayuda"],
    async execute(message, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
            .setAuthor('Solaire', 'https://i.imgur.com/qyvKxQx.png')
            .setTitle("Commands")
            .setDescription(client.commands.map(cmd => `\`${cmd.name}\``).join(", "))
            .setTimestamp()
        message.channel.send(embed)
    }
}