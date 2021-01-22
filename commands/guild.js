module.exports = {
    name: 'cheese',
    description: "The cheese command!",
    run(message, args) {
        message.channel.send(`Name: **${message.guild.name}**`)
        message.channel.send(`ID: **${message.guild.id}**`)
        message.channel.send(`Owner: **${message.guild.owner}**`)
        message.channel.send(`Name: **${message.guild.memberCount}**`)
        message.channel.send(`Server Creation: **${message.guild.createdAt}**`)

        console.log(`[${message.author.id}] ${message.author.username} executed command guild in ${message.guild.name}`)
    }
}