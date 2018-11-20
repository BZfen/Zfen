const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: "7.62 ",
    url: "",
    description: "Buyur Kardeşim Bu Tagı Alarak Sizlerde 7.62 Ailesine Katılabilirsin \n**7.62 Oyun Klanı**",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tagal'],
  permLevel: 0
};

exports.help = {
  name: 'tagal',
  description: 'tagal',
  usage: 'Tagımızı  Al'
};
