const { Client } = require('discord.js');
const bot = new Client;
const token = ""; // TOKEN BOT KAMU
var PREFIX = ""; // PREFIX BOT KAMU

bot.on('ready', () => {
    console.log('Bot Sudah Online!')

    bot.user.setActivity("", { //ISI KETERANGAN BOT BISA PREFIX/BISA YANG LAIN SEMAU KAMU
        type: "PLAYING"
    }).catch(console.error);
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');
    if(!message.content.startsWith(PREFIX)) return;
    switch (args[0]) {

    case 'register':

            if(message.channel.type == "dm") return message.channel.send("Kamu tidak bisa registrasi dari DM")
                const shifter = args.shift()
            if(!args.length) return message.channel.send("Mohon berikan nama untuk di set")
                const nick = "[PUBLIC] " + args.join(" ")
            if(nick.length > 16) return message.channel.send("Nickname terlalu panjang, mohon berikan yang lebih singkat")
            try {
                    message.member.roles.add("810483828661551124") //Role Yang Mau DiSet
                    message.member.roles.add("844955744041828422")
                    message.member.setNickname(nick)
                    return message.reply("Terima kasih telah mampir di server ini 😊*");
                } catch(e) {
                    return message.channel.send("Ada sebuah kesalahan disaat melaksanakan command.")
                            }
            break;
    }
})

bot.login(token);
