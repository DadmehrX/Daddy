const Discord = require("discord.js");
let client = new Discord.Client(),
  prefix = "!";




client.on("message", message => {
  if (message.content.startsWith(prefix)) {
    let args = message.content.slice(prefix.length).split(" "),
      cmd = args.shift();

    if (cmd === "help") {
      message.author.send("لطفا منتظر بمانید");
      client.channels.cache.get("793047078271057940").send("@Arbiter Boro residegi kon :/ <#792190789240487947>");
    }
    if (cmd === "new") {
      client.channels.cache
        .get("792192338968444969")
        .send("لطفا در ویس چنل منتظر بمانید");
      client.channels.cache
        .get("793020699437826048")
        .send("@here Member Jadid Omade :/ <#792192338968444969>");
    }
  }
});



var used1 = false;
client.on('ready', () => {
    console.log('On ShoD ');
    client.user.setStatus('online').catch(console.error);
    setInterval(() => {
      let membersCount = client.guilds.cache.map(guild => guild.memberCount).reduce((a, b) => a + b, 0)
      var guild = client.guilds.cache.get('724360597038301199')
      var onlineCount = guild.members.cache.filter(m => m.presence.status === 'online').size 
        if(used1){
          client.user.setActivity(`تعداد کاربران : ${membersCount}`,{
          type: 'LISTENING'
/*           url: 'https://www.twitch.tv/XXX', */
          });
        used1 = false;}
      else{
         client.user.setActivity("Welcome To Divinity=))",{
        type: "LISTENING"
        });
        used1 = true;}
    }, 25000);

});


client.login(process.env.TOKEN);
