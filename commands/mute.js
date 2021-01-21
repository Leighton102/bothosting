module.exports = {
    name: 'mute',
    description: "mute hehehe",
    execute(message, args) {
        if (message.member.hasPermission('MANAGE_ROLES')) {

        } else {
            message.reply(`[${message.author.id}] You do not have permission to use this command! ${message.author}`)
        }
    }
}