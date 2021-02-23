module.exports = {
    name: 'ping',
    description: "This is the one and only ping command!",
    execute(message, args){
        message.channel.send(`${message.author} **Pong!**`)

        console.log(`${message.author} executed ping lol XDXD XD XD XD XD XD X DX`)
    }
}