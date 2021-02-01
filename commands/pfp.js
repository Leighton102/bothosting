module.exports = {
    name: 'pfp',
    description: "The pfp command!",
    execute(message, args){
        message.channel.send(message.author.displayAvatarURL)

        console.log(`[${message.author.id}] ${message.author.username} executed command cheese in ${message.guild.name}`)
    }
}