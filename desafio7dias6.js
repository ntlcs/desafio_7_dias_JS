const readline = require('readline').createInterface({
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
        removerComida();
      } else {
        console.log("Resposta inválida. Por favor, responda 'sim' ou 'não'.");
        adicionarComida();
      }
    });
  }
  
  // Função para remover comida da lista de compras
  function removerComida() {
    if (listaVazia()) {
      console.log("A lista de compras está vazia.");
      rl.close();
      return;
    }
  
    console.log("\nItens na lista de compras:");
    for (const categoria in listaDeCompras) {
      if (listaDeCompras[categoria].length > 0) {
        console.log(`  ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaDeCompras[categoria].join(', ')}`);
      }
    }
  
    rl.question("\nQual item você deseja remover da lista de compras? ", (item) => {
      let itemEncontrado = false;
      for (const categoria in listaDeCompras) {
        const index = listaDeCompras[categoria].indexOf(item);
        if (index !== -1) {
          listaDeCompras[categoria].splice(index, 1);
          console.log(`"${item}" removido da lista de compras.`);
          itemEncontrado = true;
          break;
        }
      }
      if (!itemEncontrado) {
        console.log("Não foi possível encontrar o item dentro da lista!");
      }
      adicionarComida();
    });
  }
  
  // Função para verificar se a lista de compras está vazia
  function listaVazia() {
    for (const categoria in listaDeCompras) {
      if (listaDeCompras[categoria].length > 0) {
        return false;
      }
    }
    return true;
  }
  
  // Iniciar o programa
  console.log("Bem-vindo ao seu assistente de lista de compras!\n");
  adicionarComida();
  