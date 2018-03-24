const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./botconfig.json");
const fs = require("fs");
client.login(config.token);

// Listener Event: Bot Launcher

client.on('ready', () => { // Boots Bot
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setGame(`on ${client.guilds.size} servers`);
});
client.on('disconnected', function () { // Disconnects Bot
    console.log('Disconnected.');
    process.exit(1);
});
client.on("message", async message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    if (command === "kick") {
        if (message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name)))
            return message.reply("Sorry, you don't have permissions to use this!");
        let member = message.mentions.members.first();
        if (!member)
            return message.reply("Please mention a valid member of this server");
        if (!member.kickable)
            return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
        let reason = args.slice(1).join(' ');
        if (!reason)
            return message.reply("Please indicate a reason for the kick!");
        await member.kick(reason)
            console.catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

    }
});
client.on('message', message => { // add/remove StarMade role
    if (message.content === (config.prefix + "addstarmade")) {
        let myRole = message.guild.roles.find("name", "StarMade");
        console.log(message.member.roles.has(myRole.id));
        if (message.member.roles.has(myRole.id)) {
            console.log(`Yay, the author of the message has the role!`);
            message.channel.send("You wot queer???");
        } else {
            console.log(`Nope, noppers, nadda.2`);
            let member = message.member;
                message.channel.send("Added to Role!");
            member.addRole(myRole.id).catch(console.error);
        }
    }
    if (message.content === (config.prefix + "removestarmade")) {
        let member = message.member;
        let myRole = message.guild.roles.find("name", "StarMade");
        console.log(message.member.roles.has(myRole.id));
        if (message.member.roles.has(myRole.id)) {
            console.log(`Yay, the author of the message has the role! Removing...`);
            let member = message.member;
            message.channel.send("Removed from Role!");
            member.removeRole(myRole.id).catch(console.error);
        } else {
            console.log(`Nope, noppers, nadda.`);
            message.channel.send("Sorry, but it appears you are already have StarMade...");
        }
    }
})
client.on('message', message => { // add/remove Minecraft role
    if (message.content === (config.prefix + "addminecraft")) {
        let myRole = message.guild.roles.find("name", "Minecraft");
        console.log(message.member.roles.has(myRole.id));
        if (message.member.roles.has(myRole.id)) {
            console.log(`Yay, the author of the message has the role!`);
            message.channel.send("You wot queer???");
        } else {
            console.log(`Nope, noppers, nadda.2`);
            let member = message.member;
            message.channel.send("Added to Role!");
            member.addRole(myRole.id).catch(console.error);
        }
    }
    if (message.content === (config.prefix + "removeminecraft")) {
        let member = message.member;
        let myRole = message.guild.roles.find("name", "Minecraft");
        console.log(message.member.roles.has(myRole.id));
        if (message.member.roles.has(myRole.id)) {
            console.log(`Yay, the author of the message has the role! Removing...`);
            let member = message.member;
            message.channel.send("Removed from Role!");
            member.removeRole(myRole.id).catch(console.error);
        } else {
            console.log(`Nope, noppers, nadda.`);
            message.channel.send("Sorry, but it appears you are already have Minecraft...");
        }
    }
})
client.on('message', message => { // add/remove Warframe role
    if (message.content === (config.prefix + "addwarframe")) {
        let myRole = message.guild.roles.find("name", "Warframe");
        console.log(message.member.roles.has(myRole.id));
        if (message.member.roles.has(myRole.id)) {
            console.log(`Yay, the author of the message has the role!`);
            message.channel.send("You wot queer???");
        } else {
            console.log(`Nope, noppers, nadda.2`);
            let member = message.member;
            message.channel.send("Added to Role!");
            member.addRole(myRole.id).catch(console.error);
        }
    }
    if (message.content === (config.prefix + "removewarframe")) { 
        let member = message.member;
        let myRole = message.guild.roles.find("name", "Warframe");
        console.log(message.member.roles.has(myRole.id));
        if (message.member.roles.has(myRole.id)) {
            console.log(`Yay, the author of the message has the role! Removing...`);
            let member = message.member;
            message.channel.send("Removed from Role!");
            member.removeRole(myRole.id).catch(console.error);
        } else {
            console.log(`Nope, noppers, nadda.`);
            message.channel.send("Sorry, but it appears you are already have Warframe...");
        }
    }
})

//Listener Event: User joining the discord server.
client.on('guildMemberAdd', member => {
    
    console.log('User ' + member.username + ' has joined the server!') // Sends a message in console that someone joined the discord server.
  
    // Now, Lets add a role when they join. First, we need to get the role we want.
    var role = member.guild.roles.find('name', 'User'); // This looks for the role in the server(guild, it seasrches by name, meaning you can change 'User' to the role you want.
    // Secondly, we will add the role.
    member.addRole(role)
});
client.on('message', message => { // Displays Help for Commands
    if (message.content === (config.prefix + "help")) {  
        let member = message.member;








    };
})
