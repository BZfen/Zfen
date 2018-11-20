const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Genel Sürüm : 2.0 - Yapılan değişiklikler",
                    icon_url: ""
                  },
                color: 0xD97634,
                description: "**- Yeni Sistem ** \nTag Al Aktif"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'yenilik',
  description: 'Değişiklikleri gösterir.',
  usage: 'değişiklikler'
};
