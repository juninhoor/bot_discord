const Discord = require("discord.js"); //Conexão com a livraria Discord.js


module.exports.run = async (client, message, args) => {
 message.delete().catch(O_o => {});


  
  const embed = new Discord.MessageEmbed()
   .setTitle('Título do Embed')
    .setDescription('Descrição do Embed')
    .addField("**[ROXOS]**:", "20")
    .addField("**[AMARELOS]**:", "12")
      .addField("**[ROXOS]**:", "20")
    .addField("**[AMARELOS]**:", "12")
      .addField("**[ROXOS]**:", "20")
    .addField("**[AMARELOS]**:", "12")
      .addField("**[ROXOS]**:", "20")
    .addField("**[AMARELOS]**:", "12")
      .addField("**[ROXOS]**:", "20")
    .addField("**[AMARELOS]**:", "12")
      .addField("**[ROXOS]**:", "20")
    .addField("**[AMARELOS]**:", "12")
      .addField("**[ROXOS]**:", "20")
    .addField("**[AMARELOS]**:", "12")
      .addField("**[ROXOS]**:", "20")
    .addField("**[AMARELOS]**:", "12")
      .addField("**[ROXOS]**:", "20")
    .addField("**[AMARELOS]**:", "12")
  

message.channel.send(embed);

};

 

