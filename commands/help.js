const { MessageFlags } = require("discord.js")

module.exports = {
    name: 'help',
    description: "The help command!",
    execute(message, args){
        const newEmbed = new MessageEmbed()
        .setColor('#3A46F0')
        .setTitle('Bot Help')
        .setURL('https://discord.gg/uKQPYFfmZJ')
        .setDescription('This is an embed for the server rules')
        .addFields(
            {name: 'About', value: 'Welcome! This will help you with bot commands!'},
            {name: 'Invite Link', value: 'https://discord.gg/uKQPYFfmZJ'},
        )
        .setImage('https://i.kym-cdn.com/entries/icons/original/000/034/772/Untitled-1.png%27')
        .setFooter('Last Updated 2/15/2021');

        message.channel.send(newEmbed);
    }


}
        
