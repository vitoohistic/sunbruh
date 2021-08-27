module.exports = {
	aliases: ['ava'],
	name: 'avatar',
	description: 'Display info about yourself.',
	async execute(message, args, cmd, client, Discord) {
		const { MessageEmbed } = require("discord.js"); {
			let embed = new MessageEmbed() 
			.setAuthor(
				message.author.username,
				message.author.displayAvatarURL)
			.setTitle(`${message.author.username}'s avatar`)
			.setColor("#2b2b2b")
			.setImage(message.author.displayAvatarURL())
			.setFooter(`Your username: ${message.author.username}`);
		message.channel.send(embed);
		}
	}
}
