const { MessageFlags } = require("discord.js")

module.exports = {
    name: 'rules',
    despription: "Shows the rules",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#5ff9f7')
        .setTitle('Help')
        .setURL('https://discord.gg/9BdGSUPHja%22')
        .setDescription('If you need help or support, join our bot server!')
        .addFields(
            {name: 'How to join the server!', value: 'Click on "Rules" at the top to join the server!'}
        )
        .setImage('https://i.imgur.com/ZOKp8LH.png')
        .setFooter('We hope this will help you!');

        message.author.send(newEmbed);
    }


}