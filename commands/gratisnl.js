const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send("Olá, seja muito bem-vindo(a) à **Cidade New Life!**" + "\n" + " " + "\n" + "Para resgatar o seu **VIP Grátis**, siga estes passos simples: primeiro, execute o comando /vipgratis na cidade. Em seguida, escolha o seu veículo dos 15 disponíveis e receba seus benefícios exclusivos do **VIP**." + "\n" + " " + "\n" + "___**Siga nossas redes sociais**___" + "\n" + " " + "\n" + "> Site Oficial: https://newliferp.com.br/" + "\n" + "> Instragram: https://instagram.com/rp_newlife" + "\n" + "> TikTok: https://www.tiktok.com/@rpnewlife");
 
  
  const emojis = ["✅", "❌"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
};