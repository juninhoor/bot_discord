const express = require('express');
const app = express();
const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client



module.exports.run = async (client, message, args) => {
 message.delete().catch(O_o => {});


  
  const embed = new Discord.MessageEmbed()
  .setColor('#ff0000')

.setAuthor('Facs/Orgs New Life Roleplay', 'https://media.discordapp.net/attachments/954435720477552640/954435926954770432/New_Life_GIF.gif?width=224&height=224', 'https://discord.com/channels/887528121987919902/898216675181228092')
  .setDescription('A Equipe Responsável Ilegal da NewLife agradece o seu interesse em uma de nossas facções! O ilegal aqui na cidade funciona da seguinte forma:')
.setThumbnail('https://media.discordapp.net/attachments/954435720477552640/954435926954770432/New_Life_GIF.gif?width=224&height=224')

  .addField("  ", "> ➱ Primeiro, você assume um gueto que são como um sistema de fila dentro da cidade e funcionam como uma facção de rua de forma mais limitada. Os guetos comercializam **lança-perfume.**" + "\n" + "> ➱ Estando em um gueto que mostra bom desempenho e bons números de membros ativos, você pode ganhar a chance de dominar uma facção que esteja com números baixos ou ser transferido pra alguma que esteja livre." + "\n" + "> ➱ Em <#898216675181228092> você consegue ver mais informações sobre nossas facções, orgs e guetos disponíveis.")
  .addField("  ", "Existe um segundo caminho também, onde você pula o processo dos guetos e entra diretamente em uma facção quando estiver disponível: adquirindo a **prioridade de fila** em nossa loja.")
    .addField("Caso tenha interesse em entrar em um de nossos guetos, para dar prosseguimento ao ticket vou pedir algumas informações:", "```fix" + "\n" + "- Nome e passaporte de 10 players ativos e com bom histórico na cidade." + "\n" + "- Ter uma hierarquia pré-definida.```")
    .addField(" ", "*Lembrando que é um processo de fila e todos os dados encaminhados irão passar por uma avaliação da staff!*")
    .setTimestamp()
  .setFooter('Atenciosamente Equipe Responsável Ilegal New Life RP', 'https://media.discordapp.net/attachments/954435720477552640/954435926954770432/New_Life_GIF.gif?width=224&height=224');

message.channel.send(embed);


};

 

