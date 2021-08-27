require('dotenv').config();
const Discord = require("discord.js");
const DisTube = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");

const client = new Discord.Client({
	intents: [
		'GUILDS',
		'GUILD_VOICE_STATES',
		'GUILD_MESSAGES',
	],
})

const SoundCloudPlugin = require('@distube/soundcloud')
const fs = require("fs");


client.commands = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
client.emotes = (process.env.EMOJI);
client.events = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.aliases = new Discord.Collection()
client.distube = new DisTube.default(client, {
    searchSongs: 10,
    emitNewSongOnly: true,
    plugins: [new SpotifyPlugin()],
  });

//Command Handler y Event Handler
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});
    // Eventos distube
    const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``
    client.distube
        .on("playSong", (message, queue, song) => message.channel.send(
            `${client.emotes.play} | Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`
        ))
        .on("addSong", (message, queue, song) => message.channel.send(
            `${client.emotes.success} | Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
        ))
        .on("playList", (message, queue, playlist, song) => message.channel.send(
            `${client.emotes.play} | Play \`${playlist.title}\` playlist (${playlist.total_items} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
        ))
        .on("addList", (message, queue, playlist) => message.channel.send(
            `${client.emotes.success} | Added \`${playlist.title}\` playlist (${playlist.total_items} songs) to queue\n${status(queue)}`
        ))
        // DisTubeOptions.searchSongs = true
        .on("searchResult", (message, result) => {
            let i = 0
            message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`)
        })
        // DisTubeOptions.searchSongs = true
        .on("searchCancel", message => message.channel.send(`${client.emotes.error} | Searching canceled`))
        .on("error", (message, err) => message.channel.send(`${client.emotes.error} | An error encountered: ${err}`))
    
 // Token de acceso
client.login(process.env.DISCORD_TOKEN);