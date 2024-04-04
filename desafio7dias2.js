// Importante: Este código deve ser executado em um ambiente que suporta entrada de usuário, como um navegador da web ou um ambiente Node.js.

// Pergunta 1: Pedir o nome do usuário
let nome = prompt("Qual o seu nome?");

// Pergunta 2: Pedir a idade do usuário
let idade = prompt("Quantos anos você tem?");

// Pergunta 3: Pedir a linguagem de programação que o usuário está estudando
let linguagem = prompt("Qual linguagem de programação você está estudando?");

// Exibir a mensagem com as respostas do usuário
console.log("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!");

// Pergunta 4: Perguntar se o usuário gosta de estudar a linguagem que está aprendendo
let gostaDeEstudar = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.");

// Verificar a resposta e exibir mensagem correspondente
if (gostaDeEstudar === '1') {
  console.log("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (gostaDeEstudar === '2') {
  console.log("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
  console.log("Resposta inválida. Por favor, responda com o número 1 para SIM ou 2 para NÃO.");
}
