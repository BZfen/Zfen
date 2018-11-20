const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**Sohbet ve Oyun BOT sunucunuza eklendi!**',
  '**Sohbet ve Oyun BOT** sunucunuzdaki insanlara kolaylıklar sağlar.',
  'Bot Serhan E. tarafından geliştirilmektedir ',
  'Botumuzun özelliklerini öğrenmek için svo!yardım komutunu kullanabilirsin.',
  '**ÖNEMLİ:** Botun kullanması için başvuru kanalı açın ve deneme için',
  'svo!başvuru komutunu kullanın.',
  '',
  `**Sohbet ve Oyun BOT Resmî Discord Sunucusu** https://discord.gg/SZq7RdH`,
  `**Sohbet ve Oyun Discord Sunucusu** https://discord.gg/SZq7RdH`
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})