const { Client } = require('discord.js');
const bot = new Client;
const token = ""; // TOKEN BOT KAMU
var PREFIX = ""; // PREFIX BOT KAMU

bot.on('ready', () => {
    console.log('Bot Sudah Online!')//Pernyataan yang keluar ketika kamu melakukan di terminal dan akan keluar statement "Bot Sudah Online"   
    bot.user.setActivity("", { //ISI KETERANGAN BOT BISA PREFIX/BISA YANG LAIN SEMAU KAMU
        type: "" //Set activity bisa STREAMING, LISTEN, PLAYING, dan WATCHING
    }).catch(console.error);
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');
    if(!message.content.startsWith(PREFIX)) return;
    switch (args[0]) {

    case '': //Case atau kasus yang akan digunakan ketika bot mendapatkan respon prefix dari client, contohnya: registrasi, daftar, dll

            if(message.channel.type == "dm") return message.channel.send("")//Client melakukan register di DM (Direct Message) maka bot akan mengeluarkan pernyataan tidak bisa atau menyuruh client untuk melakukan register di channel discord di server tertentu
                const shifter = args.shift()
            if(!args.length) return message.channel.send("")//Jika bot mendapatkan prefix dari client seperti ?register maka bot akan menbalas pertanyaan seperti "Mohon berikan nama singkat"
                const nick = "" + args.join(" ")//Mengganti nick client seperti "[PUBLIC]", "(Warga)", dsb
            if(nick.length > 16) return message.channel.send("")//Jika client mengasih nama lebih dari "16 kata" maka bot akan memberi tahu client untuk memberi nickname tidak terlalu panjang
            try {
                    message.member.roles.add("") //Role ID Yang Mau DiSet
                    message.member.setNickname(nick)
                    return message.reply(""); //Kata kata ketika client sudah mememenuhi
                } catch(e) {
                    return message.channel.send("Ada sebuah kesalahan disaat melaksanakan command.") //Ada masalah dari bot dan client tidak mendapatkan output atau hasil
                            }
            break;
    }
})

bot.login(token); //untuk satu hal ini, kalian tidak perlu untuk mengisi lagi token bot kalian. Karena sudah tertera di atas tempat isi nya
