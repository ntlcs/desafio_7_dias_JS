const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Números mínimo e máximo para o intervalo (inclusive)
  const minimo = 0;
  const maximo = 10;
  
  // Número aleatório dentro do intervalo especificado
  const numeroADevinar = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  
  // Número de tentativas permitidas
  let tentativasRestantes = 3;
  
  console.log("Bem-vindo ao jogo de adivinhação!");
  
  // Função para verificar se o palpite está correto e tomar as medidas apropriadas
  function verificarPalpite(palpite) {
    if (parseInt(palpite) === numeroADevinar) {
      console.log("Parabéns! Você acertou!");
      readline.close();
    } else {
      tentativasRestantes--;
      if (tentativasRestantes > 0) {
        console.log(`Você errou! Restam ${tentativasRestantes} tentativas.`);
        pedirPalpite();
      } else {
        console.log(`Que pena! Você não acertou. O número era ${numeroADevinar}.`);
        readline.close();
      }
    }
  }
  
  // Função para pedir um novo palpite ao usuário
  function pedirPalpite() {
    readline.question(`Digite um número entre ${minimo} e ${maximo}: `, (palpite) => {
      if (isNaN(parseInt(palpite)) || parseInt(palpite) < minimo || parseInt(palpite) > maximo) {
        console.log(`Por favor, digite um número válido entre ${minimo} e ${maximo}.`);
        pedirPalpite();
      } else {
        verificarPalpite(palpite);
      }
    });
  }
  
  // Iniciar o jogo pedindo o primeiro palpite
  pedirPalpite();
  