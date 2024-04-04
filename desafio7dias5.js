const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Objeto para armazenar as comidas por categoria
const listaDeCompras = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
  outros: []
};

// Função para adicionar comida à lista de compras
function adicionarComida() {
  rl.question("Deseja adicionar uma comida na sua lista de compras? (sim/não) ", (resposta) => {
    if (resposta.toLowerCase() === 'sim') {
      rl.question("Qual comida você deseja inserir? ", (comida) => {
        rl.question("Em qual categoria essa comida se encaixa? (frutas/laticínios/congelados/doces/outros) ", (categoria) => {
          categoria = categoria.toLowerCase();
          if (listaDeCompras.hasOwnProperty(categoria)) {
            listaDeCompras[categoria].push(comida);
            console.log(`"${comida}" adicionado(a) à categoria "${categoria}".`);
          } else {
            console.log("Categoria inválida. A comida será adicionada como 'outros'.");
            listaDeCompras['outros'].push(comida);
          }
          adicionarComida();
        });
      });
    } else if (resposta.toLowerCase() === 'não') {
      mostrarLista();
      rl.close();
    } else {
      console.log("Resposta inválida. Por favor, responda 'sim' ou 'não'.");
      adicionarComida();
    }
  });
}

// Função para exibir a lista de compras por categoria
function mostrarLista() {
  console.log("\nLista de compras:");

  for (const categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
      console.log(`  ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaDeCompras[categoria].join(', ')}`);
    }
  }
}

// Iniciar o programa
console.log("Bem-vindo ao seu assistente de lista de compras!\n");
adicionarComida();
