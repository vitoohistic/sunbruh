module.exports = {
    name: "play",
    aliases: ["p"],
    inVoiceChannel: true,
    async execute(message, args, cmd, client, Discord) {
        const string = args.join(" ")
        if (!string) return message.channel.send(`❌ | Please enter a song url or query to search.`)
        try {
            client.distube.play(message, string)
        } catch (e) {
            message.channel.send(`${client.emotes.error} | Error: \`${e}\``)
        }
    }
}