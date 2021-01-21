module.exports = {
    name: 'ping',
    description: "This is the one and only ping command!",
    execute(message, args){
        message.channel.send(`${message.author} **Pong!**`)

        console.log(`[${message.author.id}] ${message.author.username} executed command ping in ${message.guild.name}`)
    }
}