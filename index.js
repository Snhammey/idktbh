
let GROUP_ID = 8157249
const Discord = require('discord.js');
var bodyParser = require('body-parser');
const https = require('https');
const axios = require('axios')
const client = new Discord.Client();
let cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_824A3E43A158369E2780980CCAFDDC2F8E87BF7143D29C24AADB97894FAD4980C15D3AA3DD4D640A4EF7E89133F1616E908D81844C914EC03428F5FCDF2AB1F403E7B36E3B71D7ACC5C5A49A56BB6639F38E5AE75CEAFE9FBDE112586E76ED18F6DCEC881F20074DA3CBEF6AC3342D09DFC6EAF8CCB09FCE82CB419CD12B86A413FB181FBD643306B8D28F80727CACEC0EFCF85276FD3B95ECEF67EC0F59F199A6131B4BB0FBCC3DC5C07EA7F8FA8A07FB5F8714248A04569EB51DBECDA41EB42BA212C41852DF619FD199F229CEF45C5A397B9BB95A83EB1D5456C6DB792777BE2691FC4D049F9D9C68BEA12D6BD3395D1210F97AAAB976DEAD1C32CEA978348BCE99A703769ED1DF387E7C195A86AB83C512D2B115F61F71011B582DD8E8F0197CB84EB317EE0DCB5828F0EC08B2A2F0E3FC8B"
const roblox = require("noblox.js")
const {
    Client,
    MessageEmbed
} = require('discord.js');
const express = require("express");
const app = express();
var prefix = "."

client.on('ready', async () => {
    roblox.setCookie(cookie).catch(err => { 
        roblox.refreshCookie(process.env.COOKIE)
        console.log(erR)
    })
            client.user.setActivity("Frivanó | .help", {
                type: "PLAYING"
            })
        })




client.on('guildMemberAdd', async member => {
            let response = await axios.get(`https://groups.roblox.com/v1/groups/${GROUP_ID}/`)
    let count = response.data.memberCount
const welcomeembed = new Discord.MessageEmbed()
.setTitle("<:frivanoicon:785108913003298849> Welcome to the Server!")
.setDescription(`Welcome to the Server, ${member}! All rules & Informations are located in <#765531186252480522> and most importantly, have fun!\n\nDiscord Count: **${member.guild.memberCount}** Members.\nRoblox Count: **${count}** Members.`)
.setColor('#FF6969')
.setFooter("Frivanó Assistant", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
.setThumbnail(member.user.avatarURL({ dynamic:true }))
.setTimestamp()
client.channels.cache.get(`769828853081440347`).send(welcomeembed)
})


client.on("message", async message => {
        let response = await axios.get(`https://groups.roblox.com/v1/groups/${GROUP_ID}/`)
    let count = response.data.memberCount
    if (message.content.toLowerCase() === `${prefix}help`) {
    	const helpembed = new Discord.MessageEmbed()
    	.setTitle("<:frivanoicon:785108913003298849> Frivanó Commands")
    	.setDescription("Hello there! My prefix is `" + prefix + "`, to use any command, please type **.[command] <argument>**")
    		.addFields(
		{ name: 'Utility Commands', value: '`uptime`, `help`, `membercount`, `suggest`' },
		{ name: 'Roblox-Related Commands', value: '`promote`, `suspend`, `demote`, `shout`, `whois`, `roles`, `rank`, `fire`' },
		{ name: 'Fun Commands', value: '`To Be Added`' },
		{ name: 'Extra Commands', value: '`To Be Added`' },
	)
    	    	.setColor('#FF6969')
                .setFooter("Frivanó Assistant", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                .setTimestamp()
    	message.channel.send(helpembed)
    } else if (message.content.toLowerCase() === `${prefix}uptime`) {
        const moment = require("moment");
require("moment-duration-format");
const duration = moment.duration(client.uptime).format(" D [Days], H [Hours], m [Minutes], s [Seconds]");
    	    	const uptimeembed = new Discord.MessageEmbed()
    	.setDescription(`<:frivanoicon:785108913003298849> **${duration}**.`)
    	.setColor('#FF6969')
    	message.channel.send(uptimeembed)
} else if (message.content.toLowerCase() === `${prefix}membercount`) {
    const embedcount = new Discord.MessageEmbed()
    .setTitle(`<:frivanoicon:785108913003298849>**${message.guild.name}**'s Count`)
    .setThumbnail("https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                    .setFooter("Frivanó Assistant", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                    .setTimestamp()
    .setColor('#FF6969')
    .addFields(
        { name: 'Discord Server', value: `${message.guild.memberCount} Members`, inline: true},
        { name: 'Roblox Group', value: `${count} Members`, inline: true},
        )
    message.channel.send(embedcount)
} else if (message.content.toLowerCase() === `${prefix}roles`) {
    const rolesembed = new Discord.MessageEmbed()
    .setTitle("<:frivanoicon:785108913003298849> Frivanó's Rolelist")
                        .setFooter("Frivanó Assistant", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                    .setTimestamp()
                    .setColor('#FF6969')
    .setDescription("Guest : | **Rank ID: 0**\n-| Premium Customers :  | **Rank ID: 1**\n-| Affiliate Representatives :  | **Rank ID: 2**\n-| Honorable Customer :  | **Rank ID: 3**\n-| Suspended :  | **Rank ID: 4**\n-| Awaiting Training :  | **Rank ID: 5**\n-| Junior Juicer :  | **Rank ID: 6**\n-| Juicer :  | **Rank ID: 7**\n-| Senior Juicer :  | **Rank ID: 8**\n-| Experienced Juicer :  | **Rank ID: 9**\n-| Corporate Officer :  | **Rank ID: 10**\n-| Chief Corporate Officer  | **Rank ID: 11**\n-| Shift Leader  | **Rank ID: 12**\n-| General Manager  | **Rank ID: 13**\n-| Executive Director  | **Rank ID: 14**\n-| Board Of Directors  | **Rank ID: 15**\n-| Administrative Team  | **Rank ID: 16**\n-| Board Of Trustees  | **Rank ID: 17**\n-| Automation  | **Rank ID: 18**\n-| Development Team  | **Rank ID: 19**\n-| Presidential Board  | **Rank ID: 254**\n-| Executive President  | **Rank ID: 255**")
message.channel.send(rolesembed)
} else if (message.content.toLowerCase() === `${prefix}merch`) {
    const merchembed = new Discord.MessageEmbed()
    .setTitle("<:frivanoicon:785108913003298849> Frivanó - Merchandise")
                        .setFooter("Frivanó Assistant", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                    .setTimestamp()
                    .setColor('#FF6969')
                    .setDescription("Following are the Links to all **Official** Frivanó Merchandise(s).\n\n╰► **[[ORANGE] Frivanó Merchandise](https://www.roblox.com/catalog/5970687922/ORANGE-Frivan-Merchandise)**\n╰► **[[RED] Frivanó Merchandise](https://www.roblox.com/catalog/5970682889/RED-Frivan-Merchandise)**\n╰► **[[YELLOW] Frivanó Merchandise](https://www.roblox.com/catalog/5970662532/YELLOW-Frivan-Merchandise)**\n╰► **[[PINK] Frivanó Merchandise](https://www.roblox.com/catalog/5970659116/PINK-Frivan-Merchandise)**\n╰► **[[VIOLET] Frivanó Merchandise](https://www.roblox.com/catalog/5970656570/VIOLET-Frivan-Merchandise)**\n╰► **[[CYAN] Frivanó Merchandise](https://www.roblox.com/catalog/5970651605/CYAN-Frivan-Merchandise)**\n╰► **[[LIME] Frivanó Merchandise](https://www.roblox.com/catalog/5970643353/LIME-Frivan-Merchandise)**\n\n:paperclip: Direct link to Frivano's Group store can be found [here](http://www.merch.frivano.cf).")
                   let msga = await message.channel.send("Getting the links..")
                   msga.edit("Here you go!", merchembed)
}

})


//ROBLOX-RELATED COMMANDS





client.on("message", async message => {
    let response = await axios.get(`https://groups.roblox.com/v1/groups/${GROUP_ID}/`)
    let groupshout = response.data.shout.body
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
if (command === 'promote') {
        if(!message.member.roles.cache.some(role =>["-| SHR", "Trusted"].includes(role.name))){
            return;
    }
    if (!args.length) {
        const uhoh = new Discord.MessageEmbed()
        .setDescription(`<:frivanoicon:785108913003298849> ${message.author}, you'll need to provide the username to promote.` + "\n\nUsage: `" + ".promote <username>`")
                .setColor('#FF6969')
        return message.channel.send(uhoh);
    }
let id = await roblox.getIdFromUsername(args[0]).catch(err => {
    const embed = new Discord.MessageEmbed()
   .setDescription(`<:frivanoicon:785108913003298849> **${args[0]}** doesn't seem to exist.`)
.setColor('#FF6969')
})
let ok1 = await roblox.getUsernameFromId(id).catch(err => {
    const embed = new Discord.MessageEmbed()
   .setDescription(`<:frivanoicon:785108913003298849> Caught error:\n\n${err}`)
.setColor('#FF6969')
})
let rankid = await roblox.promote(8157249, id).catch(err => {
    const embed = new Discord.MessageEmbed()
   .setDescription(`<:frivanoicon:785108913003298849> Caught error:\n\n${err}`)
.setColor('#FF6969')
})
let abc = rankid.oldRole.name
let abc1 = rankid.newRole.name
const embedyo = new Discord.MessageEmbed()
.setDescription(`<:frivanoicon:785108913003298849> **${ok1}** has been **PROMOTED!**`)
.addFields(
    { name: 'Old Rank', value: `${abc}`, inline: true },
        { name: 'New Rank', value: `${abc1}`, inline: true },
    )
                .setColor('#FF6969')
                .setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
                                .setFooter("Frivanó Assistant", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                .setTimestamp()
    message.channel.send(embedyo)
        const embednew = new Discord.MessageEmbed()
    .setDescription(`<:frivanoicon:785108913003298849> **${ok1}** has been **PROMOTED!**`)
.setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)

.addFields(
    { name: 'Old Rank', value: `${abc}`, inline: true },
        { name: 'New Rank', value: `${abc1}`, inline: true },
    { name: 'Commander', value: `${message.author}`, inline: false },
    )
                .setColor('#FF6969')
                                .setFooter("Frivanó Logs", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                .setTimestamp()
    client.channels.cache.get(`771258928951590943`).send(embednew)







//SUSPEND





} else if (command === 'suspend') {
            if(!message.member.roles.cache.some(role =>["-| SHR", "Trusted"].includes(role.name))){
            return;
    }
    if (!args.length) {
        const uhoh = new Discord.MessageEmbed()
 .setDescription(`<:frivanoicon:785108913003298849> ${message.author}, you'll need to provide the username to suspend.` + "\n\nUsage: `" + ".suspend <username>`")
                .setColor('#FF6969')
        return message.channel.send(uhoh);
    }
let id = await roblox.getIdFromUsername(args[0]).catch(err => {
    const embed = new Discord.MessageEmbed()
   .setDescription(`<:frivanoicon:785108913003298849> **${args[0]}** doesn't seem to exist.`)
.setColor('#FF6969')
})
let LOL = await roblox.getRankNameInGroup(GROUP_ID, id)
let ok1 = await roblox.getUsernameFromId(id).catch(err => {
    const embed = new Discord.MessageEmbed()
   .setDescription(`<:frivanoicon:785108913003298849> Caught error:\n\n${err}`)
.setColor('#FF6969')
})
let rankid = await roblox.setRank({ group: 8157249, target: id, rank: 4 })
let LOL1 = await roblox.getRankNameInGroup(GROUP_ID, id)
const embedyo = new Discord.MessageEmbed()
.setDescription(`<:frivanoicon:785108913003298849> **${ok1}** has been **SUSPENDED!**`)
.setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)

.addFields(
    { name: 'Previous Rank', value: `${LOL}`, inline: true },
    { name: 'Current Rank', value: `${LOL1}`, inline: true },
    )
                .setColor('#FF6969')
                                .setFooter("Frivanó Assistant", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                .setTimestamp()
    message.channel.send(embedyo)
    const embednew = new Discord.MessageEmbed()
    .setDescription(`<:frivanoicon:785108913003298849> **${ok1}** has been **SUSPENDED!**`)
.setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)

.addFields(
    { name: 'Previous Rank', value: `${LOL}`, inline: true },
    { name: 'Current Rank', value: `${LOL1}`, inline: true },
    { name: 'Commander', value: `${message.author}`, inline: false },
    )
                .setColor('#FF6969')
                                .setFooter("Frivanó Logs", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                .setTimestamp()
    client.channels.cache.get(`771258928951590943`).send(embednew)








//Demote





} else if (command === 'demote') {
            if(!message.member.roles.cache.some(role =>["-| SHR", "Trusted"].includes(role.name))){
            return;
    }
    if (!args.length) {
        const uhoh = new Discord.MessageEmbed()
         .setDescription(`<:frivanoicon:785108913003298849> ${message.author}, you'll need to provide the username to demote.` + "\n\nUsage: `" + ".demote <username>`")
                .setColor('#FF6969')
        return message.channel.send(uhoh);
    }
let id = await roblox.getIdFromUsername(args[0]).catch(err => {
    const embed = new Discord.MessageEmbed()
   .setDescription(`<:frivanoicon:785108913003298849> **${args[0]}** doesn't seem to exist.`)
.setColor('#FF6969')
})
let ok1 = await roblox.getUsernameFromId(id).catch(err => {
    const embed = new Discord.MessageEmbed()
   .setDescription(`<:frivanoicon:785108913003298849> Caught error:\n\n${err}`)
.setColor('#FF6969')
})
let rankid = await roblox.demote(8157249, id).catch(err => {
    const embed = new Discord.MessageEmbed()
   .setDescription(`<:frivanoicon:785108913003298849> Caught error:\n\n${err}`)
.setColor('#FF6969')
})
let abc = rankid.oldRole.name
let abc1 = rankid.newRole.name
const embedyo = new Discord.MessageEmbed()
.setDescription(`<:frivanoicon:785108913003298849> **${ok1}** has been **DEMOTED!**`)
.addFields(
    { name: 'Old Rank', value: `${abc}`, inline: true },
        { name: 'New Rank', value: `${abc1}`, inline: true },
    )
                .setColor('#FF6969')
                .setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
                                .setFooter("Frivanó Assistant", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                .setTimestamp()
    message.channel.send(embedyo)
        const embednew = new Discord.MessageEmbed()
    .setDescription(`<:frivanoicon:785108913003298849> **${ok1}** has been **DEMOTED!**`)
.setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)

.addFields(
    { name: 'Old Rank', value: `${abc}`, inline: true },
        { name: 'New Rank', value: `${abc1}`, inline: true },
    { name: 'Commander', value: `${message.author}`, inline: false },
    )
                .setColor('#FF6969')
                                .setFooter("Frivanó Logs", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                .setTimestamp()
    client.channels.cache.get(`771258928951590943`).send(embednew)







//GROUP SHOUT HEREEE




} else if (command === 'shout') {
            if(!message.member.roles.cache.some(role =>["-| SHR", "Trusted"].includes(role.name))){
            return;
    }
            let msg = args.join(' ');
 if (!args.length) {
        const uhoh = new Discord.MessageEmbed()
         .setDescription(`<:frivanoicon:785108913003298849> ${message.author}, you'll need to provide the shout.` + "\n\nUsage: `" + ".shout <message>`")
                .setColor('#FF6969')
        return message.channel.send(uhoh);
    }
 let shout = await roblox.shout({ group: GROUP_ID, message: msg })
     let response = await axios.get(`https://groups.roblox.com/v1/groups/${GROUP_ID}/`)
    let groupshout1 = response.data.shout.body
const embedyo = new Discord.MessageEmbed()
.setDescription(`<:frivanoicon:785108913003298849> Group Shout has been **UPDATED**!`)
.addFields(
    { name: 'Old Shout', value: groupshout, inline: false },
    { name: 'New Shout', value: groupshout1, inline: false },
    )
                .setColor('#FF6969')
.setFooter("Frivanó Assistant", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                .setTimestamp()
    message.channel.send(embedyo)
        const embednew = new Discord.MessageEmbed()
.setDescription(`<:frivanoicon:785108913003298849> Group Shout has been **UPDATED**!`)

.addFields(
    { name: 'Group Shout', value: groupshout1, inline: true },
    { name: 'Shouted by', value: `${message.author}`, inline: false },
    )
                .setColor('#FF6969')
                                .setFooter("Frivanó Logs", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                .setTimestamp()
    client.channels.cache.get(`771258928951590943`).send(embednew)




} else if (command === 'whois') {
if (!args.length) {
                const uhoh = new Discord.MessageEmbed()
         .setDescription(`<:frivanoicon:785108913003298849> ${message.author}, you'll need to provide the username.` + "\n\nUsage: `" + ".whois <ROBLOX USERNAME>`")
                .setColor('#FF6969')
        return message.channel.send(uhoh);
}
let username = args[0]
let id = await roblox.getIdFromUsername(username).catch(err => {
return message.channel.send(`User Doesn't exist or is banned.`)
});

const embedLOL1 = new Discord.MessageEmbed()
.setDescription('**LOADING DATA....**')
.setColor('#FF6969')
let msg = await message.channel.send(embedLOL1)
let rankname = await roblox.getRankNameInGroup(8157249, id).catch(err => {
    console.log(err)
})
let info = await roblox.getPlayerInfo(id).then(function(info) {
const embed = new Discord.MessageEmbed()
const searchembed = new Discord.MessageEmbed()
 .setColor("#FF6969") // sets the color of the embed
             .setTimestamp()
             .setThumbnail(`https://www.roblox.com/headshot-thumbnail/image?userId=${id}&width=420&height=420&format=png`) // gets the roblox profile picture
             .addField("Username", `**[${info.username}](https://roblox.com/users/${id}/profile)**` || 'Unresolvable', false) // everything in the embed is undefined, therefore can be changed by the variables
             .addField("Group Rank", `${rankname}` || 'Unresolvable', false)
             .addField("Status", info.status || 'Nothing', false)
             .addField("Description", info.blurb || 'Nothing', false)
             .addField("Account Age", `${info.age} Days old` || 'Unresolvable')
             .setFooter('Frivanó Assistant', "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
             .setTitle(`${info.username}'s Info`)
msg.edit(searchembed)

})




//Fire

} else if (command === 'fire') {
                if(!message.member.roles.cache.some(role =>["-| SHR", "Trusted"].includes(role.name))){
            return;
    }
    if (!args.length) {
        const uhoh = new Discord.MessageEmbed()
 .setDescription(`<:frivanoicon:785108913003298849> ${message.author}, you'll need to provide the username to Fire.` + "\n\nUsage: `" + ".fire <username>`")
                .setColor('#FF6969')
        return message.channel.send(uhoh);
    }
    if (args[0].toLowerCase() == "cuddlydrab"){
        return message.channel.send("no. :heart:")
    }
let id = await roblox.getIdFromUsername(args[0]).catch(err => {
    const embed = new Discord.MessageEmbed()
   .setDescription(`<:frivanoicon:785108913003298849> **${args[0]}** doesn't seem to exist.`)
.setColor('#FF6969')
})
let LOL = await roblox.getRankNameInGroup(GROUP_ID, id)
let ok1 = await roblox.getUsernameFromId(id).catch(err => {
    const embed = new Discord.MessageEmbed()
   .setDescription(`<:frivanoicon:785108913003298849> Caught error:\n\n${err}`)
.setColor('#FF6969')
message.channel.send(embed)
})
let rankid = await roblox.setRank({ group: 8157249, target: id, rank: 1 })
let LOL1 = await roblox.getRankNameInGroup(GROUP_ID, id)
const embedyo = new Discord.MessageEmbed()
.setDescription(`<:frivanoicon:785108913003298849> **${ok1}** has been **FIRED!**`)
.setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)

.addFields(
    { name: 'Previous Rank', value: `${LOL}`, inline: true },
    { name: 'Current Rank', value: `${LOL1}`, inline: true },
    )
                .setColor('#FF6969')
                                .setFooter("Frivanó Assistant", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                .setTimestamp()
    message.channel.send(embedyo)
    const embednew = new Discord.MessageEmbed()
    .setDescription(`<:frivanoicon:785108913003298849> **${ok1}** has been **FIRED!**`)
.setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)

.addFields(
    { name: 'Previous Rank', value: `${LOL}`, inline: true },
    { name: 'Current Rank', value: `${LOL1}`, inline: true },
    { name: 'Commander', value: `${message.author}`, inline: false },
    )
                .setColor('#FF6969')
                                .setFooter("Frivanó Logs", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                .setTimestamp()
    client.channels.cache.get(`771258928951590943`).send(embednew)



//rank



} else if (command === 'rank') {
                if(!message.member.roles.cache.some(role =>["-| SHR", "Trusted"].includes(role.name))){
            return;
    }
    if (!args.length) {
        const uhoh = new Discord.MessageEmbed()
 .setDescription(`<:frivanoicon:785108913003298849> ${message.author}, you'll need to provide the username to rank the user.` + "\n\nUsage: `" + ".setrank **<username>** [RANK_ID]`")
                .setColor('#FF6969')
        return message.channel.send(uhoh);
    }
            let rank = Number(args[1]);
            if (!rank){
               const oops = new Discord.MessageEmbed()         
 .setDescription(`<:frivanoicon:785108913003298849> ${message.author}, you'll need to provide the id to rank the user.` + "\n\nUsage: `" + ".setrank <username> **[RANK_ID]**`")
                .setColor('#FF6969')
                return message.channel.send(oops);
            }
    if (args[0].toLowerCase() == "cuddlydrab"){
        return message.channel.send("Uh, no. :heart:")
    }

let id = await roblox.getIdFromUsername(args[0]).catch(err => {
    const embead = new Discord.MessageEmbed()
   .setDescription(`<:frivanoicon:785108913003298849> **${args[0]}** doesn't seem to exist.`)
.setColor('#FF6969')
message.channel.send(embead)
})
let LOL = await roblox.getRankNameInGroup(GROUP_ID, id)
let ok1 = await roblox.getUsernameFromId(id).catch(err => {
    const embed = new Discord.MessageEmbed()
   .setDescription(`<:frivanoicon:785108913003298849> Caught error:\n\n${err}`)
.setColor('#FF6969')
message.channel.send(embed)
})
let rankid = await roblox.setRank({ group: 8157249, target: id, rank: rank })
let LOL1 = await roblox.getRankNameInGroup(GROUP_ID, id)
const embedyo = new Discord.MessageEmbed()
.setDescription(`<:frivanoicon:785108913003298849> **${ok1}** has been **RANKED!**`)
.setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)

.addFields(
    { name: 'Previous Rank', value: `${LOL}`, inline: true },
    { name: 'Current Rank', value: `${LOL1}`, inline: true },
    )
                .setColor('#FF6969')
                                .setFooter("Frivanó Assistant", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                .setTimestamp()
    message.channel.send(embedyo)
    const embednew = new Discord.MessageEmbed()
    .setDescription(`<:frivanoicon:785108913003298849> **${ok1}** has been **RANKED!**`)
.setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)

.addFields(
    { name: 'Previous Rank', value: `${LOL}`, inline: true },
    { name: 'Current Rank', value: `${LOL1}`, inline: true },
    { name: 'Commander', value: `${message.author}`, inline: false },
    )
                .setColor('#FF6969')
                                .setFooter("Frivanó Logs", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                .setTimestamp()
    client.channels.cache.get(`771258928951590943`).send(embednew)






//suggest











      } else if (command === 'suggest'){  
       if (!args.length) {
        const uhoh = new Discord.MessageEmbed()
 .setDescription(`<:frivanoicon:785108913003298849> ${message.author}, you'll need to suggest something.` + "\n\nUsage: `" + ".suggest [Suggestion]`")
                .setColor('#FF6969')
        return message.channel.send(uhoh);
    } 
                                //if command is suggest
const channel = message.guild.channels.cache.find(ch => ch.name === 'suggestions');  //finds the channel named suggestions 
const embed = new Discord.MessageEmbed()
.setTitle("<:frivanoicon:785108913003298849> Frivanó - New Suggestion!")
.setDescription(`${message.author} has just suggested a suggestion, if you think the suggestion should be added, react with <:check:772347592977547266>, else react with <:Cross:772347592424030258>.`)
.addFields(
    { name: 'Suggestion:', value: args.join(' '), inline: true },
    )
                    .setColor('#FF6969')
                .setFooter("Frivanó Assistant", "https://cdn.discordapp.com/attachments/769816173104988170/785030486656548934/discord.png")
                .setTimestamp()
                .setAuthor(message.author.tag, message.author.avatarURL())
let msg = await channel.send(embed)
msg.react("772347592977547266")
msg.react("772347592424030258")
    const embednew = new Discord.MessageEmbed()
    .setDescription("<:frivanoicon:785108913003298849> Suggestion Successfully sent!")
                        .setColor('#FF6969')
message.channel.send(embednew)  //Sends the arguments
}
}); 




client.login("NzY5ODkyODg3MzExNDE3Mzc0.X5VooA.WONrQotb6KVjyuoPlAKrredrcbE");

app.get("/", (req, res) => {
    res.send("yes/no");
});
// listen for requests & Keep bot alive

let listener = app.listen(process.env.PORT, function() {
    //setInterval(() => { // Used to work sometime ago
    //    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    //}, 280000);
    console.log('Not that it matters but your app is listening on port ' + listener.address().port);
});

client.on('error', console.error)