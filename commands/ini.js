const express = require('express');
const app = express();
const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client



module.exports.run = async (client, message, args) => {
 message.delete().catch(O_o => {});


  
  const embed = new Discord.MessageEmbed()
  .setColor('#ff0000')
  .setTitle('Denúncias New Life Roleplay')
  .setDescription('**:paperclip: Olá! Estamos aqui para solucionar seu problema!**')
.setThumbnail('https://media.discordapp.net/attachments/954435720477552640/954435926954770432/New_Life_GIF.gif?width=224&height=224')
  .addField("  ", "*Para ajudarmos na sua denúncia por favor nos envie:*" + "\n" + "> ID do denunciado: " + "\n" + "> Motivo para denunciar:" + "\n" + "> Provas em prints ou vídeo sinalizando em que minuto ocorre a quebra de regra (com áudio):")
  .addField("  ", "Assim que enviado iremos dar continuidade a denúncia.")
  .setTimestamp()
  .setFooter('Atenciosamente Equipe Responsável Denuncias New Life RP', 'https://media.discordapp.net/attachments/954435720477552640/954435926954770432/New_Life_GIF.gif?width=224&height=224');

message.channel.send(embed);

};

 

