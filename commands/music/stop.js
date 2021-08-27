module.exports = {
    name: "stop",
    aliases: ["disconnect", "leave", "STOP!"],
    inVoiceChannel: true,
    async execute(message, args, cmd, client, Discord) {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`❌  | There is nothing in the queue right now!`)
        client.distube.stop(message)
        message.channel.send(`Hammer time!`)
    }
}