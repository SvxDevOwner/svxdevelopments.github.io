
const Discord = require('discord.js');


const client = new Discord.Client();

var prefix = "t+";
client.on('ready', () => {
    
    console.log(`Bot: Hosting ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`); 
    client.user.setStatus('online')
    //client.user.setActivity(`${client.users.cache.size} Members & ${client.guilds.cache.size} Servers${` | t+help`}`, {type: "WATCHING"});
    client.user.setActivity(`   Updateing... | t+help`, {type: "WATCHING"});
});

var bannedwords = "fuck,shit,slut,whore".split(",");

client.on("message", msg => {
  if (msg.guild === null) return;

  for (i=0;i<bannedwords.length;i++) {
    if (msg.content.toLowerCase().includes(bannedwords[i])) {
      msg.delete();
      msg.reply("Please don't swear!");
      return;
    }
  }

  if (msg.author.bot) return;
  if (!msg.member.hasPermission("SEND_MESSAGES")) return;

if (msg.content.toLowerCase().startsWith(prefix + "update")) {
    const Embed = new Discord.MessageEmbed()


.setTitle("UPDATES")
.addField("Check Out New Updates", `[Go to T+tanic Moderation Website](https://svxdevelopments.glitch.me/)`)

msg.reply(Embed);
}

if (msg.content.toLowerCase().startsWith(prefix + "vote")) {
    const Embed = new Discord.MessageEmbed()


.setTitle("Vote For T+tanic Moderation")
.addField("Vote", "[Top.gg link](https://top.gg/bot/713123656238366780)")

msg.reply(Embed);
}

  if (msg.content.toLowerCase().startsWith(prefix + "help")) {
    const Embed = new Discord.MessageEmbed()
	.setTitle('Commands')
  .setDescription(`ADMIN COMMANDS
t+ban (@ member) (removes member forever)
t+kick (@ member) (removes member for server)
t+purge (numerber of messges) (Deletes the amount of messages given)
t+mute (@ member) (gives muted role) = Under Update(0.0.1)
t+unmute (@ member) (removes muted role) = Under Update(0.0.1)
=================================================
COMMANDS EVERYONE CAN USE
t+vote (Sends top.gg link)
t+website (Shows T+tanic Moderation Website)
t+botinfo (Shows all the info on the bot)
t+invite (Sends link to user)
t+update (Shows all recent updates)
========================================
FUN COMMANDS
COMING SOON...
t+flipcoin (Flips a coin from heads to tails)
t+imgur (image you want) (what do you want it to search up)
t+giphy (gif you want) (gif you want it to show up)
t+rate (@ user) (rates you 1 - 100)
t+weather (state) (shows the weather)
t+stats (shows you discord account stats)
t+urban (search what you want)`)
	

msg.reply(Embed);

  }
  if (msg.content.toLowerCase().startsWith(prefix + "botinfo")) {
const Embed = new Discord.MessageEmbed()
.setTitle("Bot Info")
        .addField(`Users im watching`, `${client.users.cache.size}`)
        .addField(`Servers im watching`, `${client.guilds.cache.size}`)
        .addField(`Channels im watching`, `${client.channels.cache.size}`)
        msg.channel.send(Embed);
  }

        if (msg.content.toLowerCase().startsWith(prefix + "invite")) {
    const Embed = new Discord.MessageEmbed()
	.setTitle('Invite Link Below')
  
	.addField("Invite", "[Invite My Bot To Your Server](https://discord.com/api/oauth2/authorize?client_id=713123656238366780&permissions=8&scope=bot)")

  .setImage('https://im4.ezgif.com/tmp/ezgif-4-c810ed91fd67.png')
msg.reply(Embed);
  }
  
if (msg.content.toLowerCase().startsWith(prefix + "website")) {
    const Embed = new Discord.MessageEmbed()
	.setTitle('Custom Made Server Website Link')
  
	.addField("Website", "[svx developments website](https://svxdevelopments.glitch.me/)")

  .setImage('https://im4.ezgif.com/tmp/ezgif-4-c810ed91fd67.png')
msg.reply(Embed);
  }

  if (!msg.member.hasPermission("KICK_MEMBERS")) return;

  if (!msg.content.toLowerCase().startsWith(prefix)) return;
  msg.delete();
  if (msg.content.toLowerCase().startsWith(prefix + "kick ")) {
    var mem = msg.mentions.members.first();
    mem.kick().then(() => {
      msg.channel.send(mem.displayName + " has successfully been kicked by " + msg.author.username + "!");
    }).catch(e => {
      msg.channel.send("Please mention the users @");
    }); 
  } 
  if (msg.content.toLowerCase().startsWith(prefix + "purge")) {
    var mc = msg.content.split(" ")[1];
    msg.channel.bulkDelete(mc);
  } 
    if (msg.content.toLowerCase().startsWith(prefix + "eval")) {
    var sc = msg.content.substring(msg.content.indexOf(" "));
    eval(sc);
  }
  if (msg.content.toLowerCase().startsWith(prefix + "calc")) {
    var ca = msg.content.substring(msg.content.indexOf(" "));
    msg.reply(ca + " is " + eval(ca).toFixed(2));
  }

  if (msg.content.toLowerCase().startsWith(prefix + "mute")) {
    
   member.roles.cache('710597420286869571').then(() => {
        msg.channel.send(mem.displayName + " has successfully been muted!");
        console.log(Muted);
      }).catch(e => {
        msg.channel.send("Please mention the users @");
        console.log(e);
      });

    }
  
  if (msg.content.toLowerCase().startsWith(prefix + "unmute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.removeRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been unmuted!");
      }).catch(e => {
        msg.channel.send("Please mention the users @");
        console.log(e);
      });

    }
  }
  if (!msg.member.hasPermission("BAN_MEMBERS")) return;
  if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {
    var mem = msg.mentions.members.first();
    var mc = msg.content.split(" ")[2];
    mem.ban(mc).then(() => {
      msg.channel.send(mem.displayName + " has successfully been banned by " + msg.author.username + " for " + mc + " days!");
    }).catch(e => {
      msg.channel.send("Please mention the users @");
    });
  }
});


client.login('NzEzMTIzNjU2MjM4MzY2Nzgw.XsfDdQ.Vra4KraxOCkAfm6cGwuKeKRtjug');