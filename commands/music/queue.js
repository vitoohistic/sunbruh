module.exports = {
    name: "queue",
    aliases: ["q"],
    async execute(message, args, cmd, client, Discord) {
        const queue = client.distube.getQueue(message.guild.id)
        if (!queue) return message.channel.send(`❌ | There is nothing playing!`)
        const q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
        message.channel.send(`❌ | **Server Queue**\n${q}`)
    }
}