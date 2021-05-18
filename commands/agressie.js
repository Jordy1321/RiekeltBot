module.exports = {
    name: 'agressie',
    description: "this is a ping command!",
    async execute(message) {
        message.delete()
        message.reply('stop met - pesten');
    }
}