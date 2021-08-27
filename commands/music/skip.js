module.exports = {
    name: "skip",
    inVoiceChannel: true,
    async execute(message, args, cmd, client, Discord) {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`❌ | There is nothing in the queue right now!`)
        try {
            client.distube.skip(message)
            message.channel.send(`☑️| Skipped! Now playing:\n${queue.songs[0].name}`)
        } catch (e) {
            message.channel.send(`❌ | ${e}`)
        }
    }
}