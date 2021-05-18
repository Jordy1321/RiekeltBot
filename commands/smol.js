module.exports = {
    name: 'smol',
    description: "this is a ping command!",
    async execute(message) {
        message.delete()
        message.reply('- is nu een dwerg');
    }
}