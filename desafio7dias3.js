const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startGame() {
  console.log("Bem-vindo ao jogo de escolha de destino na área de programação!");
  
  rl.question("Você prefere seguir para a área de Front-End ou Back-End? (Front-End/Back-End) ", (area) => {
    if (area.toLowerCase() === 'front-end') {
      frontEndPath();
    } else if (area.toLowerCase() === 'back-end') {
      backEndPath();
    } else {
      console.log("Escolha inválida. Por favor, tente novamente.");
      startGame();
    }
  });
}

function frontEndPath() {
  rl.question("Você prefere aprender React ou Vue? (React/Vue) ", (framework) => {
    console.log(`Ótima escolha! Agora você está aprendendo ${framework}.`);

    chooseSpecialization();
  });
}

function backEndPath() {
  rl.question("Você prefere aprender C# ou Java? (C#/Java) ", (language) => {
    console.log(`Excelente escolha! Agora você está aprendendo ${language}.`);

    chooseSpecialization();
  });
}

function chooseSpecialization() {
  rl.question("Você prefere se especializar na área escolhida ou se tornar Fullstack? (Especializar/Fullstack) ", (choice) => {
    if (choice.toLowerCase() === 'especializar') {
      console.log("Boa escolha! Continue se aprofundando na área escolhida.");
    } else if (choice.toLowerCase() === 'fullstack') {
      console.log("Interessante! Prepare-se para se tornar um desenvolvedor Fullstack.");
    } else {
      console.log("Escolha inválida. Por favor, tente novamente.");
      chooseSpecialization();
    }

    askTechnologies();
  });
}

function askTechnologies() {
  let technologies = [];
  
  function askTechnology() {
    rl.question("Qual tecnologia você gostaria de aprender? (Digite 'ok' para encerrar) ", (tech) => {
      if (tech.toLowerCase() === 'ok') {
        displayTechnologies(technologies);
        rl.close();
      } else {
        technologies.push(tech);
        console.log(`Legal! Você adicionou ${tech} à sua lista de aprendizado.`);
        askTechnology();
      }
    });
  }

  askTechnology();
}

function displayTechnologies(technologies) {
  console.log("Lista de tecnologias que você deseja aprender:");
  technologies.forEach((tech, index) => {
    console.log(`${index + 1}. ${tech}`);
    // Aqui você pode adicionar mais informações sobre cada tecnologia, se desejar
  });
}

startGame();
