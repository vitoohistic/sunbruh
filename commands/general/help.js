module.exports = {
    aliases: ['h',],
    name: 'help',
    description: "Shows info about the commands the bot has",
    async execute(message, args, cmd, client, Discord) {
        const { MessageEmbed } = require("discord.js"); {
        let embed = new MessageEmbed() 
        .setAuthor('Solaire', 'https://i.imgur.com/qyvKxQx.png')
		.setThumbnail('')
        .setDescription(`
        **sun!help** - Shows you this command
        **sun!que** - You say 'que', I say 'SO'. Q U E - S O. `)
        .setColor("#c6a9fc")
		.setImage('https://i.imgur.com/y6BgUd1.png')
        message.channel.send(embed)
        }
    }
};
