const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://media.giphy.com/media/tpgAJCXrOa6Mo/giphy.gif",
          color: 0xD97634,
		  description: "Ula johnny aga seviliyorsun <3"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'sins-aga',
  description: 'Sinsi gösterir.',
  usage: 'sins-aga'
};
