const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: "Atatürk",
    url: "",
    description: ":love_letter: :heart:Mustafa Kemal Ataturk Aniyoruz.",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Atatürk'],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'Atatürk.',
  usage: 'atatürk'
};
