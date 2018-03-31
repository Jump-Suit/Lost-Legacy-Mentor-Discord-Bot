/*jshint esversion: 6 */

const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("./botconfig.json");
const config = require("./config.json");
const fs = require("fs");

bot.login(botconfig.token);

// Accessing Commands for the Bot Individually

bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);
    
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }
    
    console.log(`Loading ${jsfiles.length} commands`);
    
    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`$(i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

// Listener Event: Bot Launcher

bot.on('ready', () => { // Boots Bot
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds. ${bot.user.username }`);
    console.log(bot.cmds);
    bot.user.setGame(`on ${bot.guilds.size} servers`);
});

bot.on('disconnected', function () { // Disconnects Bot
    console.log('Disconnected.');
    process.exit(1);
});

bot.on("message", async message => {
    if (!message.content.startsWith(botconfig.prefix) || message.author.bot) return;

    if (message.content.indexOf(botconfig.prefix) !== 0) return;


    let messageArray = message.content.sp0lit(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (!commands.startWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, message, args);
});


bot.on('message', message => { // add/remove StarMade role
    if (message.content === (botconfig.prefix + "addstarmade")) {
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
    if (message.content === (botconfig.prefix + "removestarmade")) {
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
});
bot.on('message', message => { // add/remove Minecraft role
    if (message.content === (botconfig.prefix + "addminecraft")) {
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
    if (message.content === (botconfig.prefix + "removeminecraft")) {
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
bot.on('message', message => { // add/remove Warframe role
    if (message.content === (botconfig.prefix + "addwarframe")) {
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
    if (message.content === (botconfig.prefix + "removewarframe")) { 
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
bot.on('guildMemberAdd', member => {
    
    console.log('User ' + member.username + ' has joined the server!') // Sends a message in console that someone joined the discord server.
  
    // Now, Lets add a role when they join. First, we need to get the role we want.
    var role = member.guild.roles.find('name', 'User'); // This looks for the role in the server(guild, it seasrches by name, meaning you can change 'User' to the role you want.
    // Secondly, we will add the role.
    member.addRole(role)
});
bot.on('message', message => { // Displays Help for Commands
    if (message.content === (botconfig.prefix + "help")) {  
        let member = message.member;








    };
})
