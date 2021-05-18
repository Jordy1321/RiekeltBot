module.exports = {
    name: 'smol',
    description: "this is a ping command!",
    async execute(message) {
        message.delete()
        message.reply('jorim is nu een dwerg');
    }
}