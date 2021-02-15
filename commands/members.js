module.exports = {
    name: 'members',
    description: "this is the members command!",
    execute(message, args) {
        const newEmbed = new Discord.MessageEmbed()
        message.channel.send(`${message.guild.name} has ${message.guild.members}`)


    }
}