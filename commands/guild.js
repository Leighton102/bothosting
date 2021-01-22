module.exports = {
    name: 'guild',
    description: "The guild command!",
    execute(message, args){
        message.channel.send(`Server Name: **${message.guild.name}**`)
        message.channel.send(`Server ID: **${message.guild.id}**`)
        message.channel.send(`Creation: **${message.guild.createdAt}**`)
        message.channel.send(`Member Count: **${message.guild.memberCount}**`)

        console.log(`[${message.author.id}] ${message.author.username} executed command guildid in ${message.guild.name}`)
    }
}