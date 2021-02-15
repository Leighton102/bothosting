module.exports = {
    name: 'whosbest',
    description: "This is the whos best command!",
    execute(message, args){
        message.channel.send(`${message.author} is obviously.`)


    }
}