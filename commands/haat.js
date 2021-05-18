module.exports = {
    name: 'haat',
    description: "this is a ping command!",
    async execute(message, args) {
        var user;
        if (args.length === 0) {
            user = 'je'
        } else {
            user = '<@' + message.mentions.users.first() + '>' || client.users.cache.get(args[0]) + '>'
        }
        message.delete()
        message.reply(`anne wil gaat ${user} meppen`);
    }
}