module.exports = {
    aliases: ['q', 'qu', 'qe', 'qie', 'k', 'ke', 'kie', 'khe'],
    name: 'que',
    description: "this is a ping command!",
    category: 'fun',
    async execute(message, args, cmd, client, Discord){
        message.channel.send('SO');
    }
}