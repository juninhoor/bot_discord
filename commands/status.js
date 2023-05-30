module.exports = {
    config: {
      nome: 'status',                                                   
      aliases: [],                               
      descricao: 'Comando que define o status do bot.',     
      utilizacao: '!status',                                               
      cooldown: 3                                                  
    },
    run: async (client, message, args) => {
      message.delete().catch(O_o => {});  
      const status = [
    {
      type: 'PLAYING',
       
         message: 'Developed por WPRP - Júni0r#5770'
    },
    {
      type: 'WATCHING',
      message: 'Por WPRP - Júni0r#5770'
    },
  ],
    randomStatus = status[Math.floor(Math.random() * status.length)]; 
  
  setInterval(() => {
    client.user.setActivity(randomStatus.message, { type: randomStatus.type });
  }, 30000); //1s = 1000ms 30000 = 30s;
}
}
