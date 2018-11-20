const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `\ntg!tersyaz = Yazdığını Ters Yazar \ntg!espriyap = Espiri Aq \ntg!zekam = Kaç IQ \ntg!sigara = Yakın Beyler \ntg!avatarım = Avatarınınızı Gösterir \ntg!twerk = Kullan Gör \ntg!yaz = Bota İstediğiniz Şeyi Yazdırırsınız`)
  .addField("**Yetkili Komutlar**", `\ntg!kilit = Sohbeti Kilitler \ntg!uyar  = İstediğiniz Kişiyi Uyarır \ntg!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir \ntg!temizle = Sohbeti Temizler \ntg!sustur = İstediğiniz Kişiyi Susturur`)
  .addField("**Ana Komutlar**", "\ntg!tagal = Türk GÜcü Tagını Gönderir \ntg!yardım = BOT Komutlarını Atar \ntg!bela = türk Gücü 1 Numara \ntg!çukur = Çukur Hayranlarına <ooo> \ntg!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir \ntg!ailemiz = Ailemiz \ntg!sunucuicon = BOT Sunucunun Resmini Atar \ntg!bildir = BOTUN Gelişmesi İçin Öneride Bulun \ntg!yapımcı = BOTUN Yapımcısı Hakkında  Bilgi Verir \ntg!bilgi = BOT Kendisi Hakkında Bilgi Verir \ntg!ping = BOT Gecikme Süresini Söyler \ntg!davet = BOT Davet Linkini Atar \ntg!istatistik = BOT İstatistiklerini Atar ")
  .addField("**Efekt Ve Çerçeve Komutları**", `\ntg!sniper = Avatara **Sniper** Efekti Ekler \ntg!trigger = Avatara **Trigger** Efekti Ekler \ntg!wasted = Avatara **Wasted** Efekti Ekler \ntg!atatürk = Avatara **Atatürk** Çerçevesi Ekler \ntg!bravery = Avatara **Bravery** Çerçevesi Ekler \ntg!brilliance = Avatara **Brilliance** Çerçevesi Ekler \ntg!nitro = Avatara **Nitro** Çerçevesi Ekler \ntg!partner = Avatara **Partner** Çerçevesi Ekler \ntg!trinity= Avatara **Trinity** Çerçevesi Ekler \ntg!staff = Avatara **Staff** Çerçevesi Ekler \ntg!event = Avatara **Event** Çerçevesi Ekler \ntg!bughunter = Avatara **Bughunter** Çerçevesi Ekler `)
  .addField("**Yapımcı**", "**ZFEN**")
  .setFooter(' © 2018 ZFEN Tarafından Yapılmıştır ')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
    message.react('✅')
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
      message.react('✅')
    }

  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
