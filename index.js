const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


client.on("guildMemberAdd", async (member) => {
  let guild = client.guilds.cache.get("793536226925477929");
  let channel = client.channels.cache.get("793536226925477932");
  let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'sparkles');

  if (guild != member.guild) {
    return console.log('s');
  } else {

    let embed = new Discord.MessageEmbed()
      .setColor('#202094')
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Bem Vindo`)
      .setImage('https://media.tenor.com/images/ea04b00ae962aa9640226e740c16371c/tenor.gif')
      .setDescription(`${member.user}, bem vindo ao servidor ${guild.name}! Venha fumar maconha com o <@351001709256114176>`)
      .addField('STAFF AVALIAÇÃO', 'Avalie os nossos staff <#1002713788501463070>.')
      .addField('SUPORTE', 'Qualquer duvida basta chamar o <@639543935055953941>')
      .addField('DENUNCIA', 'Qualquer denuncia basta falar com nosso advogado <@924809575381749770>')
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter('ID do usuário: ' + member.user.id)
      .setTimestamp();

    await channel.send(embed)
  }


})

client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args);
  } catch (err) {

    return


  }
});




client.on('message', message => {
  if (message.content.startsWith('privnl')) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.reply('Você não tem permissão para usar este comando.');
    }

    const args = message.content.split(' ');
    const mention = args[1];
    const mensagem = args.slice(2).join(' ');

    if (!mention) {
      message.delete().catch(O_o => { });
      return message.reply('Por favor, mencione um usuário para enviar a mensagem privada.');
    }

    const user = message.mentions.users.first();
    if (!user) {
      message.delete().catch(O_o => { });
      return message.reply('Por favor, mencione um usuário válido para enviar a mensagem privada.');
    }

    const mentionId = `<@${user.id}>`;
    if (mention !== mentionId) {
      message.delete().catch(O_o => { });
      return message.reply('Por favor, mencione o usuário antes de digitar a mensagem.');
    }

    const mensagemComMencao = `${mensagem}` + `\n` + `||${mention}||`;

    user.send(mensagemComMencao)
      .then(() => {
        message.delete().catch(O_o => { });
        const embed = {
          color: 0x0099ff,
          title: 'Mensagem privada enviada!',
          description: `Mensagem enviada para ${user.username}#${user.discriminator}: ${mensagem}`,
          thumbnail: {
            url: 'https://media.discordapp.net/attachments/828729315511500891/828743300512743434/logo.png?width=640&height=640',
          },
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL(),
          },
          footer: {
            text: 'Desenvolvido por WPRP - Júni0r#5770',
            icon_url: 'https://media.discordapp.net/attachments/828729315511500891/828743300512743434/logo.png?width=640&height=640',
          },
        };
        const webhook = new Discord.WebhookClient('1097756735277637652', 'm31Is7aZ0cb3FRIDSGPBVn9F8Bil6Wq7WKHqNS1vdOkfhWuzNSsbMoH501pz5U3w3fj9');
        webhook.send({ embeds: [embed] });
        message.channel.send(`Mensagem enviada para ${user.username}#${user.discriminator}: ${mensagem}`);

      })

      .catch((error) => {
        console.error(`Não foi possível enviar mensagem para ${user.username}#${user.discriminator}. Erro:`, error);
        message.channel.send(`Não foi possível enviar mensagem para ${user.username}#${user.discriminator}.`);
      });
  }
});



client.on('message', message => {
  if (message.content.startsWith('embed')) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      message.reply('Você não tem permissão para usar esse comando.');
      return;
    }
    const content = message.content.slice('embed'.length).trim();
    message.delete().catch(O_o => { });

    if (!content) {
      message.reply('Por favor, forneça o conteúdo do embed.');
      return;
    }

    const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription(content);

    message.channel.send(embed);
  }
});

client.on('message', message => {
  if (message.content.startsWith('add')) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      message.reply('Você não tem permissão para usar esse comando.');
      return;
    }
    const content = message.content.slice('add'.length).trim();
    const imageUrl = message.attachments.size > 0 ? message.attachments.first().url : null;

    message.delete().catch(O_o => { });

    if (!content) {
      message.reply('Por favor, forneça o conteúdo do embed.');
      return;
    }

    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setDescription(content);

    if (imageUrl) {
      embed.setImage(imageUrl);
    }

    message.channel.send(embed);
  }
});

client.on('message', message => {
  if (message.content.startsWith('avv')) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      message.reply('Você não tem permissão para usar esse comando.');
      return;
    }
    const args = message.content.slice('avv'.length).trim().split(' ');
    const description = args[0].replace(/_/g, ' ');
    const addField = args[1].replace(/_/g, ' '); // substitui todos os "_" por espaços
    const addFieldb = args[2].replace(/_/g, ' ');
    const thumbnailUrl = args[3];
    const textoFooter = args[4].replace(/_/g, ' ');
    const imagemUrlFooter = args[5];
    const textoAutor = args[6].replace(/_/g, ' ');
    const imagemUrlAutor = args[7];

    message.delete().catch(O_o => { });

    if (!description) {
      message.reply('Por favor, forneça o conteúdo do embed.');
      return;
    }

    const embed = new Discord.MessageEmbed()
      .setAuthor(textoAutor, imagemUrlAutor)
      .setColor('#0099ff')
      .setDescription(description)
      .setTimestamp()
      .addField(addField, addFieldb)
      .setFooter(textoFooter, imagemUrlFooter);

    if (thumbnailUrl) {
      embed.setThumbnail(thumbnailUrl);
    }

    message.channel.send(embed);
  }
});






/*client.on('message', message => {
  if (message.content.startsWith('!nome')) {
    const member = message.mentions.members.first(); // Seleciona o primeiro membro mencionado
    if (!member) {
      message.reply('Por favor, mencione um membro válido.');
      return;
    }

    const args = message.content.split(' '); // Divide a mensagem em um array de strings com base em espaços em branco
    const newNickname = args.slice(2).join(' '); // Seleciona o novo apelido a partir do índice 2 e une as strings novamente
message.delete().catch(O_o => { });
    member.setNickname(newNickname)
      
  }
}); */



/*// Define o prefixo do comando
const prefix = '!';

// Define a lista de IDs para enviar as mensagens
const listaIds = ['388798012325101579', '716023155105333271'];


client.on('message', message => {
  // Verifica se a mensagem começa com o prefixo e se o autor é um administrador
  if (!message.content.startsWith(prefix) || !message.member.hasPermission('ADMINISTRATOR')) return;

  // Separa o comando e os argumentos
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Verifica se o comando é o de enviar mensagem
  if (command === 'enviarmensagem') {
    // Para cada ID na lista, envia a mensagem
    listaIds.forEach(id => {
      const user = client.users.cache.get(id);
      if (user) {
        user.send('Mensagem padrão');
      }
    });
  }
});*/



const { MessageEmbed } = require('discord.js');
const targetIds = ['388798012325101579', '716023155105333271']; // A lista de IDs dos usuários que receberão a mensagem

client.on('message', async (message) => {
  if (message.content.startsWith('!enviarmensagem') && message.member.hasPermission('ADMINISTRATOR')) {
    // Verifica se o comando começa com "!enviarmensagem" e se o autor da mensagem tem permissão de administrador
    const embed = new MessageEmbed()
      .setAuthor('New Life Roleplay', 'https://media.discordapp.net/attachments/954435720477552640/954435926954770432/New_Life_GIF.gif?width=224&height=224', 'https://discord.com/channels/887528121987919902/898216675181228092')
      .setDescription('Olá, faz um tempo que você nos abandonou e não joga mais em nossa cidade, estou passando aqui pra te convidar novamente para nossa cidade e conhecer diversas novidades, pra te ajudar a voltar a jogar com a gente, estarei te dando um carro a sua escolha da categoria ___**PLUS**___, para resgatar, basta subir em nosso <#901272873849720852>!')
      .addField('Estamos te esperando 😁', ' ')
      .setFooter('Atenciosamente Equipe New Life RP', 'https://media.discordapp.net/attachments/954435720477552640/954435926954770432/New_Life_GIF.gif?width=224&height=224')
      .setImage('https://media.discordapp.net/attachments/627153089253736460/1031346060158832661/unknown.png?width=288&height=242')
      .setColor('RANDOM');

    for (const id of targetIds) {
      const user = await client.users.fetch(id); // Busca o usuário pelo ID
      user.send(embed); // Envia a mensagem no privado do usuário
    }
  }
});

const fs = require('fs');
/*client.on('presenceUpdate', (oldPresence, newPresence) => {
  const newUserActivity = newPresence.activities.find(activity => activity.type === 'PLAYING');
  const oldUserActivity = oldPresence && oldPresence.activities.find(activity => activity.type === 'PLAYING');

  if (newUserActivity && (!oldUserActivity || newUserActivity.name !== oldUserActivity.name)) {
    const gameName = newUserActivity.name;
    const username = newPresence.member.displayName;
    const date = new Date().toLocaleString();
    const logMessage = `${date} - ${username} está jogando ${gameName}\n`;

    fs.appendFile('jogos.txt', logMessage, err => {
      if (err) throw err;
      console.log(`Saved game activity of ${username}: ${gameName}`);
    });
  }
});

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);

  const guild = client.guilds.cache.get('887528121987919902');
  if (!guild) return console.log('Guild not found');

  const members = await guild.members.fetch();

  const memberInfo = members.map((member) => `${member.user.id} - ${member.user.username} - ${member.user.discriminator}`);

  fs.writeFile('memberInfoNL.txt', memberInfo.join('\n'), (err) => {
    if (err) throw err;
    console.log('Member IDs and usernames saved to file!');
    client.destroy();
  });
});*/


const moment = require('moment-timezone');
const channelId = '902245153601904691';
const fileName = 'mensagens.txt';
const horaAtual = moment().tz('America/Sao_Paulo').format('HH:mm:ss');


client.on('message', message => {
  if (message.channel.id === channelId) {
    const author = message.member.displayName;
    const content = message.content;

    const data = `${horaAtual} - ${author}: ${content}\n`;

    fs.appendFile(fileName, data, (err) => {
      if (err) throw err;
    });
  }
});



const channelIdAd = '908822506411008060';
const fileNameAd = 'mensagensAD.txt';

client.on('message', message => {
  if (message.channel.id === channelIdAd) {
    const author = message.member.displayName;
    const content = message.content;

    const data = `${horaAtual} - ${author}: ${content}\n`;

    fs.appendFile(fileNameAd, data, (err) => {
      if (err) throw err;
    });
  }
});
/*client.on('message', async (message) => {
  if (message.channel.id === channelId) {
    // Adiciona a mensagem ao arquivo .txt
    fs.appendFile('mensagens.txt', `${message.content}\n`, (err) => {
      if (err) throw err;
    });
  }
});*/


/*const serverId = '887528121987919902';

client.on('ready', () => {
  console.log(`Bot logado como ${client.user.tag}`);

  // Encontra o servidor pelo ID
  const server = client.guilds.cache.get(serverId);

  // Cria um array vazio para armazenar os IDs e nomes dos canais
  const channels = [];

  // Percorre todos os canais do servidor e adiciona o ID e nome ao array
  server.channels.cache.forEach(channel => {
    if (channel.type === 'text' || channel.type === 'voice') {
      channels.push({ id: channel.id, name: channel.name });
    }
  });

  // Salva o array em um arquivo .txt
  const text = channels.map(channel => `<#${channel.id}> - ${channel.name}`).join('\n');
  fs.writeFile('canaisNLL.txt', text, err => {
    if (err) console.error(err);
    console.log('IDs e nomes dos canais salvos em arquivo .txt');
  });
});*/



const ExcelJS = require('exceljs'); // Insira o ID do chat que você deseja monitorar
const { format } = require('date-fns');
const { zonedTimeToUtc } = require('date-fns-tz');

/*const channelId = '1095101782646063164';
  const channel = client.channels.cache.get(channelId); */


/*client.on('message', message => {
  const channelId = '1095101782646063164';
  const channel = client.channels.cache.get(channelId);

  if (message.channel.id === channelId && message.embeds.length) {
    // Extrai as informações do embed
    const embed = message.embeds[0];
    const data = { title: embed.title, description: embed.description, url: embed.url, field: embed.fields[0].value, field2: embed.fields[1].value };
    // Escreve as informações em uma planilha usando a biblioteca exceljs
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Informações');
    worksheet.columns = [
      { header: 'Título', key: 'title' },
      { header: 'Descrição', key: 'description' },
      { header: 'Campos', key: 'field' },
      { header: 'Campos', key: 'field2' },
      { header: 'URL', key: 'url' }
    ];
    worksheet.addRow(data);
    workbook.xlsx.writeBuffer().then((buffer) => {
      // Cria o nome do arquivo com a data e hora da mensagem
      const now = new Date();
      now.setHours(now.getHours() - 3);
      const filename = `informacoes_${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.xls`;
      // Envia o arquivo como anexo para o canal Discord
      message.channel.send({ files: [{ attachment: buffer, name: filename }] });
    });
  }
});*/

/*client.on('message', message => {
  const channelId = '1095101782646063164';
  const channel = client.channels.cache.get(channelId);

  if (message.channel.id === channelId && message.embeds.length) {
    // Extrai as informações do embed
    const embed = message.embeds[0];
    const data = { title: embed.title, description: embed.description, url: embed.url, field: embed.fields[0].value, fieldN: embed.fields[0].name, fieldN2: embed.fields[1].name, field2: embed.fields[1].value };
    // Escreve as informações em uma planilha usando a biblioteca exceljs
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Informações');
    worksheet.addRow([data.fieldN, data.field]); // Adiciona a linha com as informações
    worksheet.addRow([data.fieldN2, data.field2]); // Adiciona a linha com as informações
    
    //worksheet.columns = [
      //{ header: 'Título', key: 'title' },
      //{ header: 'Descrição', key: 'description' },
      //{ header: 'URL', key: 'url' }
    //];
    workbook.xlsx.writeBuffer().then((buffer) => {
      // Cria o nome do arquivo com a data e hora da mensagem
      const now = new Date();
      now.setHours(now.getHours() - 3);
      const filename = `informacoes_${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.xls`;
      // Envia o arquivo como anexo para o canal Discord
      message.channel.send({ files: [{ attachment: buffer, name: filename }] });
    });
  }
});*/

/*const fetch = require('node-fetch');
const API_KEY = '';
const BASE_URL = 'https://br1.api.riotgames.com/lol/';



const commandElo = {
  name: 'elo',
  description: 'Mostra o elo do jogador no League of Legends.',
  execute: async (message, args) => {
    if (!args.length) {
      return message.reply('Por favor, insira um nome de usuário válido.');
    }

    const summonerName = args[0];

    try {
      // Obtém o ID do invocador pelo nome de usuário.
      const summonerResponse = await fetch(`${BASE_URL}summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`);
      const summonerData = await summonerResponse.json();

      // Obtém as informações do elo nas filas Solo/Duo e Flex.
      const rankedResponse = await fetch(`${BASE_URL}league/v4/entries/by-summoner/${summonerData.id}?api_key=${API_KEY}`);
      const rankedData = await rankedResponse.json();

      // Obtém o ícone do jogador.


      // Cria uma mensagem com as informações obtidas.
      const embedMessage = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${summonerName}'s Elo`)
        .setDescription(`Solo/Duo: ${rankedData.find(data => data.queueType === 'RANKED_SOLO_5x5').tier} ${rankedData.find(data => data.queueType === 'RANKED_SOLO_5x5').rank} (${rankedData.find(data => data.queueType === 'RANKED_SOLO_5x5').leaguePoints} PDL)\n\nFlex: ${rankedData.find(data => data.queueType === 'RANKED_FLEX_SR').tier} ${rankedData.find(data => data.queueType === 'RANKED_FLEX_SR').rank} (${rankedData.find(data => data.queueType === 'RANKED_FLEX_SR').leaguePoints} PDL)`)
        



      message.channel.send(embedMessage);
    } catch (error) {
      console.error(error);
      message.reply('Ocorreu um erro ao buscar as informações do jogador.');
    }
  },
};

client.once('ready', () => {
  console.log('Bot está online!');
});

client.on('message', message => {
  if (!message.content.startsWith('!') || message.author.bot) return;

  const args = message.content.slice(1).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'elo') {
    commandElo.execute(message, args);
  }
});*/


/*const fetch = require('node-fetch');


const prefix = '!'; // prefixo do bot para acionar o comando
const riotApiKey = ''; // sua chave da API da Riot Games

client.on('message', async (message) => {
  // Verifica se a mensagem começa com o prefixo e não foi enviada pelo bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // Separa o comando e os argumentos da mensagem
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  // Verifica se o comando é o que desejamos
  if (command !== 'partida') return;

  // Verifica se o jogador foi informado como argumento
  if (!args.length) {
    return message.reply('informe um nick de jogador válido!');
  }

  const nick = args[0];

  try {
    // Busca informações da conta do jogador na API da Riot Games
    const response = await fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nick}?api_key=${riotApiKey}`);
    const summoner = await response.json();

    // Busca informações sobre a partida atual do jogador na API da Riot Games
    const matchResponse = await fetch(`https://br1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summoner.id}?api_key=${riotApiKey}`);
    const match = await matchResponse.json();
    if (!match || !match.participants) {
  return message.reply('não foi possível encontrar informações da partida!');
}
    // Separa os participantes em cada time
    const blueTeam = match.participants.filter(participant => participant.teamId === 100);
    const redTeam = match.participants.filter(participant => participant.teamId === 200);

    // Cria o embed para o time azul
    const blueEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`Partida de ${nick} - Time Azul`)
      .setDescription('Jogadores e Elos')
      .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${summoner.profileIconId}.png`)
      .addFields(
        await Promise.all(blueTeam.map(async (participant) => {
          const summonerName = participant.summonerName;
          const summonerRankResponse = await fetch(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${participant.summonerId}?api_key=${riotApiKey}`);
          const summonerRank = await summonerRankResponse.json();
          const rank = summonerRank.find((entry) => entry.queueType === 'RANKED_SOLO_5x5');
          return {
            name: `${summonerName}`,
            value: `${rank ? rank.tier + ' ' + rank.rank + ' ' + rank.leaguePoints + ' PDL' : 'Unranked'}`,
            inline: true,
          };
        }))
      );
const redEmbed = new Discord.MessageEmbed()
  .setColor('#ff0000')
  .setTitle(`Partida de ${nick} - Time Vermelho`)
  .setDescription('Jogadores e Elos')
.setThumbnail(`http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${summoner.profileIconId}.png`)

  .addFields(
    await Promise.all(redTeam.map(async (participant) => {
      const summonerName = participant.summonerName;
      const summonerRankResponse = await fetch(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${participant.summonerId}?api_key=${riotApiKey}`);
      const summonerRank = await summonerRankResponse.json();
      const rank = summonerRank.find((entry) => entry.queueType === 'RANKED_SOLO_5x5');
      return {
        name: `${summonerName}`,
        value: `${rank ? rank.tier + ' ' + rank.rank + ' ' + rank.leaguePoints + ' PDL' : 'Unranked'}`,
        inline: true,
      };
    }))
  );

message.channel.send(blueEmbed);
message.channel.send(redEmbed);

  } catch (error) {
    console.error(error);
    message.reply('ocorreu um erro ao buscar informações da partida!');
  }
});*/

/*const channel = client.channels.cache.get('1042109579774922783');
const prefix = '!';

client.on('message', async (message) => {
    // Verifica se a mensagem começa com o prefixo correto e se foi enviada por um usuário
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    // Separa o comando dos argumentos
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Verifica se o comando é o desejado
    if (command === 'comando') {
        // Obtém a referência ao canal em que a mensagem foi enviada
        const channel = message.channel;

        // Envia o arquivo de áudio
        try {
            await channel.send({
                files: [{
                    attachment: './wprp.mp3',
                    name: 'wprp.mp3'
                }]
            });
        } catch (error) {
            console.error(error);
        }
    }
});*/

/*
const prefix = '!';
client.on('message', async (message) => {
// Verifica se a mensagem começa com o prefixo correto e se foi enviada por um usuário
if (!message.content.startsWith(prefix) || message.author.bot) {
return;
}

// Separa o comando dos argumentos
const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();

// Verifica se o comando é o desejado
if (command === 'comando') {
// Obtém a referência ao canal em que a mensagem foi enviada
const channel = message.channel;
  // Verifica se há um usuário marcado
const user = message.mentions.users.first();
if (!user) {
  // Se não houver um usuário marcado, envia uma mensagem de erro
  return message.reply('você precisa marcar alguém para enviar o áudio no privado!');
}

// Obtém a referência ao canal privado do usuário
const userChannel = await user.createDM();

// Envia o arquivo de áudio
try {
  await userChannel.send({
    files: [{
      attachment: './hendo.mp3',
      name: 'hendo.mp3'
    }]
  });
  message.reply(`o áudio foi enviado no privado de ${user.username}!`);
} catch (error) {
  console.error(error);
  message.reply('houve um erro ao enviar o áudio no privado.');
}
  }
});*/


/*const prefix = '!';
const audios = {
  '1': {
    file: './wprp.mp3',
    name: 'wprp.mp3'
  },
  '2': {
    file: './hendo.mp3',
    name: 'hendo.mp3'
  },
  '3': {
    file: './acesso.mp3',
    name: 'acesso.mp3'
  }
};

client.on('message', async (message) => {
  // Verifica se a mensagem começa com o prefixo correto e se foi enviada por um usuário
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }

  // Separa o comando dos argumentos
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Verifica se o comando é o desejado
  if (command === 'comando') {
    // Obtém a referência ao canal em que a mensagem foi enviada
    const channel = message.channel;
    // Verifica se há um usuário marcado
    const user = message.mentions.users.first();
    if (!user) {
      // Se não houver um usuário marcado, envia uma mensagem de erro
      return message.reply('você precisa marcar alguém para enviar o áudio no privado!');
    }

    // Cria um embed com as opções de áudio
    const embed = {
      color: 0x0099ff,
      title: 'Escolha um áudio para enviar',
      description: '',
      fields: []
    };
    for (const [key, value] of Object.entries(audios)) {
      embed.fields.push({
        name: `${key}. ${value.name}`,
        value: `Digite "${prefix}audio ${key}" para enviar este áudio`
      });
    }

    // Envia o embed com as opções de áudio
    await channel.send({ embed });

    // Espera pela resposta do usuário
    const filter = m => m.author.id === user.id && m.content.startsWith(`${prefix}audio `);
    const collector = channel.createMessageCollector(filter, { time: 15000 });
    collector.on('collect', async m => {
      // Separa o número do áudio da mensagem do usuário
      const audioNumber = m.content.slice(`${prefix}audio `.length);
      const audio = audios[audioNumber];
      if (!audio) {
        // Se o número do áudio for inválido, envia uma mensagem de erro
        await channel.send(`Opção inválida. Digite "${prefix}comando" para ver as opções novamente.`);
        return;
      }

      // Obtém a referência ao canal privado do usuário
      const userChannel = await user.createDM();

      // Envia o arquivo de áudio
      try {
        await userChannel.send({
          files: [{
            attachment: audio.file,
            name: audio.name
          }]
        });
        message.reply(`o áudio "${audio.name}" foi enviado no privado de ${user.username}!`);
      } catch (error) {
  console.error(error);
  message.reply('houve um erro ao enviar o áudio no privado.');
}
    })}               
});*/











client.login(process.env.TOKEN);