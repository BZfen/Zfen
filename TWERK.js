const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
          file:"https://media.giphy.com/media/3o6oziEt5VUgsuunxS/giphy.gif",
          color: 0xD97634,
          description: "**:peach: twerk vakti !**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'twerk',
  description: 'kedileri gösterir.',
  usage: 'twerk'
};