module.exports = {
    name: 'dog',
    description: "The dog command!",
    execute(message, args){
        message.channel.send('https://www.youtube.com/watch?v=DLu2CFDBJk0')

        console.log(`[${message.author.id}] ${message.author.username} executed command dog in ${message.guild.name}`)
    }
}