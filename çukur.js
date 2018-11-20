const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: "Çukur",
    url: "",
    description: "<ooo> Çukur Her Pazartesi Saat 20:00'da Show Tv'de Fena Film <ooo>",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çukur'],
  permLevel: 0
};

exports.help = {
  name: 'çukur',
  description: 'Çukur.',
  usage: 'Çukur'
};
