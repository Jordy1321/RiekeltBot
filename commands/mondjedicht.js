module.exports = {
    name: 'mondjedicht',
    description: "this is a ping command!",
    async execute(message) {
        message.delete()
        message.reply('\'s mond is dichtgenaaid');
    }
}