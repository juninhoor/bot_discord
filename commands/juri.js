const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send("Bem vindo a corregedoria, apesar de aqui ser um ticket em discord, *esse ticket faz parte do RP, ou seja, deve se manter a conduta de RP. Para começar seu ticket precisamos das seguintes provas.*" + "\n" + " " + "\n" + "ID do denunciado(se tiver):" + "\n" + "Motivo da denúncia:" + "\n" + "Provas:");
 

};