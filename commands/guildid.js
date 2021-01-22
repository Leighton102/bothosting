module.exports = {
    name: 'guildid',
    description: "The guildid command!",
    execute(message, args){
        message.channel.send(`Server ID: **${message.guild.id}**`)

        console.log(`[${message.author.id}] ${message.author.username} executed command guildid in ${message.guild.name}`)
    }
}