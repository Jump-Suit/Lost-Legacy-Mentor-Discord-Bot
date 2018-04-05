/*eslint no-undef: "warn"*/
/* eslint-disable no-console */

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

client.login(config.token);

// Accessing Commands for the Bot Individually

client.commands = new Discord.Collection();

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
        console.log(`${i + 1}: ${f} loaded!`);
        client.commands.set(props.help.name, props);
    });
});

client.on("message", async  message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (!command.startWith(config.prefix)) return;

    let cmd = client.commands.get(command.slice(config.prefix.length));
    if (cmd) cmd.run(client, message, args);
});

// Listener Event: Bot Launcher

// Boots Bot

client.on("ready", () => { 
    console.log('Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.');
    console.log(client.cmds);
    client.user.setActivity("on ${client.guilds.size} servers");
});

// Disconnects Bot

client.on("disconnected", function () { 
    console.log("Disconnected.");
    process.exit(1);
});


// add/remove StarMade role

client.on("message", message => {
    if (message.content === (config.prefix + "addstarmade")) {
        let myRole = message.guild.roles.find("name", "StarMade");
        console.log(message.member.roles.has(myRole.id));
        if (message.member.roles.has(myRole.id)) {
            console.log("Yay, the author of the message has the role!");
            message.channel.send("You wot queer???");
        } else {
            console.log("Nope, noppers, nadda.2");
            let member = message.member;
            message.channel.send("Added to Role!");
            member.addRole(myRole.id).catch(console.error);
        }
    }
    if (message.content === (config.prefix + "removestarmade")) {
        let myRole = message.guild.roles.find("name", "StarMade");
        console.log(message.member.roles.has(myRole.id));
        if (message.member.roles.has(myRole.id)) {
            console.log("Yay, the author of the message has the role! Removing...");
            let member = message.member;
            message.channel.send("Removed from Role!");
            member.removeRole(myRole.id).catch(console.error);
        } else {
            console.log("Nope, noppers, nadda.");
            message.channel.send("Sorry, but it appears you are already have StarMade...");
        }
    }
});

client.on("message", message => { // add/remove Minecraft role
    if (message.content === (config.prefix + "addminecraft")) {
        let myRole = message.guild.roles.find("name", "Minecraft");
        console.log(message.member.roles.has(myRole.id));
        if (message.member.roles.has(myRole.id)) {
            console.log("Yay, the author of the message has the role!");
            message.channel.send("You wot queer???");
        } else {
            console.log("Nope, noppers, nadda.2");
            let member = message.member;
            message.channel.send("Added to Role!");
            member.addRole(myRole.id).catch(console.error);
        }
    }
    if (message.content === (config.prefix + "removeminecraft")) {
        let myRole = message.guild.roles.find("name", "Minecraft");
        console.log(message.member.roles.has(myRole.id));
        if (message.member.roles.has(myRole.id)) {
            console.log("Yay, the author of the message has the role! Removing...");
            let member = message.member;
            message.channel.send("Removed from Role!");
            member.removeRole(myRole.id).catch(console.error);
        } else {
            console.log("Nope, noppers, nadda.");
            message.channel.send("Sorry, but it appears you are already have Minecraft...");
        }
    }
});

client.on("message", message => { // add/remove Warframe role
    if (message.content === (config.prefix + "addwarframe")) {
        let myRole = message.guild.roles.find("name", "Warframe");
        console.log(message.member.roles.has(myRole.id));
        if (message.member.roles.has(myRole.id)) {
            console.log("Yay, the author of the message has the role!");
            message.channel.send("You wot queer???");
        } else {
            console.log("Nope, noppers, nadda.2");
            let member = message.member;
            message.channel.send("Added to Role!");
            member.addRole(myRole.id).catch(console.error);
        }
    }
    if (message.content === (config.prefix + "removewarframe")) {
        let myRole = message.guild.roles.find("name", "Warframe");
        console.log(message.member.roles.has(myRole.id));
        if (message.member.roles.has(myRole.id)) {
            console.log("Yay, the author of the message has the role! Removing...");
            let member = message.member;
            message.channel.send("Removed from Role!");
            member.removeRole(myRole.id).catch(console.error);
        } else {
            console.log("Nope, noppers, nadda.");
            message.channel.send("Sorry, but it appears you are already have Warframe...");
        }
    }
});

//Listener Event: User joining the discord server.

client.on("guildMemberAdd", member => {
    
    console.log("User " + member.username + " has joined the server!"); // Sends a message in console that someone joined the discord server.
  
    // Now, Lets add a role when they join. First, we need to get the role we want.
    var role = member.guild.roles.find("name", "User"); // This looks for the role in the server(guild, it seasrches by name, meaning you can change 'User' to the role you want.
    // Secondly, we will add the role.
    member.addRole(role);
});
