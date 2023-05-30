const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send("___**Siga nossas redes sociais**___" + "\n" + " " + "\n" + "> Site Oficial: https://newliferp.com.br/" + "\n" + "> Instragram: https://instagram.com/rp_newlife" + "\n" + "> TikTok: https://www.tiktok.com/@rpnewlife" + "\n" + "> Youtube: https://www.youtube.com/@rp_newlife");
 

};


 