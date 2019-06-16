client.on('message', function(msg) {
var prefix = "#";
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('BLACK')
      .setAuthor(msg.guild.name, msg.guild.iconURL)
      .addField('🆔 Server ID:',`${msg.guild.id}`,true)
      .addField('📆 Created On',`${msg.guild.createdAt.toLocaleString()}`,true)
      .addField('👑 Owned By',`${msg.guild.owner}`,true)
        .addField(`:busts_in_silhouette: Members [${msg.guild.memberCount}]`,`**${msg.guild.members.filter(m=>m.presence.status == 'online').size}** Online`,true)
        .addField(`:speech_balloon: Channels  [${msg.guild.channels.size}]`,`**${msg.guild.channels.filter(m => m.type === 'text').size}** Text | **${msg.guild.channels.filter(m => m.type === 'voice').size}** Voice`,true)
      .addField('🌍 Others',`**Region:** ${msg.guild.region}\n**Verification Level:** ${msg.guild.verificationLevel}`,true)
      .addField(`:closed_lock_with_key: Roles [${msg.guild.roles.size}]`,`To see a list with all roles use **#roles**`,true)
      msg.channel.send({embed:embed});
    }
  });


  client.on('message', message => {
var prefix = "#";
       if(message.content === prefix + "cl") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ? **")
              });
                }

    if(message.content === prefix + "op") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
                
              }).then(() => {
                  message.reply("**__تم فتح الشات__?**")
              });
    }
       
});


client.on('message', message => { 
let PREFIX = '#'
    if (message.content.startsWith(PREFIX + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('? Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});


client.on('message',async message => {
  if(message.content.startsWith(".setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('? **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('? **ليس معي الصلاحيات الكافية**');
  message.channel.send('?| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})


client.on("message", message => {
    var prefix = "."; // !مسح
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "مسح")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "LastBot" // BOTY
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'سيرفر')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`**عرض تفاصيل** ${msg.guild.name}`)
      .addField('`منطقة الخادم`',`[${msg.guild.region}]`,true)
      .addField('`عدد الأدوار`',`[${msg.guild.roles.size}]`,true)
      .addField('`عدد الأعضاء`',`[${msg.guild.memberCount}]`,true)//Model codes
      .addField('`الأعضاء عبر الإنترنت`',`[${msg.guild.members.filter(m=>m.presence.status == 'online').size}]`,true)//modeel Codes
      .addField('`قنوات النص`',`[${msg.guild.channels.filter(m => m.type === 'text').size}]`,true)//Model codes
      .addField('`القنوات الصوتية`',`[${msg.guild.channels.filter(m => m.type === 'voice').size}]`,true)
      .addField('`خادم الخادم`',`**${msg.guild.owner}**`,true)
      .addField('`معرف الخادم`',`**${msg.guild.id}**`,true)
      .addField('`تم إنشاء الخادم في`',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed})
    }
});// BOB Server


var adminprefix = " حالتي "; 


 const developers =["401044429646987275"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'g')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "lea")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'w')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 
  'BOB')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 's')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Modelcodes");//Modlcodes
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)//Model codes
} else
if (message.content.startsWith(adminprefix + 'ava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.login(process.env.BOT_TOKEN);// 


lient.on('message' , message => {
  var prefix = "#";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);//
 })
  }  
 });


 client.on('message', message => {
if(message.content.startsWith(prefix + 'اسكت')){
    let role = message.guild.roles.find(r => r.name === 'Muted');//.BOB
    if(!role) message.guild.createRole({name: 'Muted'});
     if(user.bot){'BOB'
        return message.channel.send(`لايمكنني         ${user} اعطاء ميوت الى هاذا الشخص `);
    }
    if(user.hasPermission('ADMINISTRATOR')) {
        return message.channel.send(`${user} اعطاء ميوت الى هاذا الشخص `);
    }
   
    if(!user){//.BOB
        message.channel.send(`ليس هناك شخص لاعطاءه ميوت`);
    }
    message.guild.channels.forEach(f => {
        f.overwritePermissions(role, {
            SEND_MESSAGES: false
        });
        user.addRole(role);//.BOB
       
    });
     message.channel.send(`لقد تم اعطاء ميوت لهذا شخص ${user}`);
}
});


client.on('message', message => {
if(message.content.startsWith(prefix + 'تكلم')){
    let role = message.guild.roles.find(r => r.name === 'Muted');
if(!user.roles.has(role)) {
    return message.channel.send(`هذا الشخص ليس لديه ميوت`);
}//.BOB
    user.removeRole(role).then(message.channel.send(`تم فك لاسكات عن 
${user}`));
    
}
}); //.BOB

client.on('message' , function (message){
      var token =NTg3NzAwODEyNTU4MzY4Nzgx.XQZRqQ.yL5tdf1FcG6-brCQJZd6urjiASQ
      if(message.content === '!restart') {
if(message.author.id !== 'ايديك') return message.reply('**الامر خاص بـ صاحب البوت وشكرا**');
          client.destroy();
          client.login(token) // 
var time = 7200000;
client.setInterval(function() {
    client.destroy();
    client.login(token) // 
  }, time);
}
})



const pubg = [     'Fortnite | ما هو اقوي سلاح برائيك ؟',     'Fortnite | ما هي افضل منطقة تنزل بها برايك ؟',     'Fortnite | كم عدد فوزاتك ؟',     'Fortnite | كم هو عدد اكثر قتلات لك ؟ ',     'Fortnite | كم عدد اصدقائك ؟ ',     'Fortnite | كم عدد سكناتك ؟ ',     'Fortnite | من هو افضل لاعب اجنبي حسب رايك ؟ ',     'Fortnite | من هو افضل لاعب عربي حسب رايك ؟ ',     'Fortnite | ما هو افضل طور حسب رايك ؟ ',     'Fortnite | هل انت محترف ام نوب ؟ ',     'Fortnite | ما هما افضل سلاحين مع بعض حسب رايك ؟ ',  ]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('?فورت نايت')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبه اسئله فورت نايت")
  .setColor('#FFA500')
  .setDescription(`${pubg[Math.floor(Math.random() * pubg.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/497081825492074496/500662255004942346/images.jpg")
                  .setTimestamp()
 
   message.channel.sendEmbed(client);
   message.react("??")
 }
});


