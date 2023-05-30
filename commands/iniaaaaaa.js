const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send("📎 **Olá! Estamos aqui para solucionar seu problema!**"  + "\n" +"ㅤㅤ" + "\n" + "Para ajudarmos na sua denúncia por favor nos envie:" + "\n" + "> ID do denunciado:" + "\n" + "> Motivo para denunciar:" + "\n" + "> Provas em prints ou vídeo sinalizando em que minuto ocorre a quebra de regra (com áudio):" + "\n" +"ㅤㅤ" + "\n" + "ㅤㅤ" + "\n" +"Assim que enviado iremos dar continuidade a denúncia.");
 

};


 