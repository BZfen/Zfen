const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("**Yapımcım ✯ʌғғεтмεz☬#6530'dir**");
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['p'],
  permLevel: 0 
};

exports.help = {
  name: 'yapımcı', 
  description: 'Yapımcının Kim Olduğunu Söyler',
  usage: 'yapımcı,yapan'
};
