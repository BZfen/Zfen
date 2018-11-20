const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
          color: 0xD97634,
		  description: "**Ulan ne sapık adamsın bir de iman edip namaz kılacaksın ülkemizin haline bak ! **"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'kedileri gösterir.',
  usage: 'kaçcm'
};
