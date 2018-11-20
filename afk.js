const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let afkneden = args.slice(0).join(' ');
        if (afkneden.length < 1) {
		return message.reply('**AFK**,Nedenini **__Yazman__** Lazim ');
			} else {
        message.member.setNickname(`[AFK]${message.author.username}`);
        const afkm = new Discord.RichEmbed()
        .setDescription(`${message.author.username} AFK Nedenin: ${afkneden} Olarak Degistrildi`)
        return message.channel.sendEmbed(afkm)
		message.member.setNickname(`${message.author.username}`);
      }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk','awardfromkeyboard'],
  permLevel: 0
};

exports.help = {
  name: 'info-afk',
  description: 'AFK Moduna gecersiniz',
  usage: 'afk sebepiniz'
}; 