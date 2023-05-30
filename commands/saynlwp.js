const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const requiredRoleId = '998664900593340457';
  const requiredRole = message.guild.roles.cache.get(requiredRoleId);
  const isAdmin = message.member.hasPermission('ADMINISTRATOR');
  if (!requiredRole || (!message.member.roles.cache.has(requiredRoleId) && !isAdmin)) {
    return message.reply('Você não tem permissão para usar esse comando!');
  }
  
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
 
  
  
};
