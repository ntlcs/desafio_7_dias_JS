// Função para adição
function adicao(num1, num2) {
    return num1 + num2;
}

// Função para subtração
function subtracao(num1, num2) {
    return num1 - num2;
}

// Função para multiplicação
function multiplicacao(num1, num2) {
    return num1 * num2;
}

// Função para divisão
function divisao(num1, num2) {
    if (num2 === 0) {
        return "Erro! Divisão por zero.";
    } else {
        return num1 / num2;
    }
}

// Função principal da calculadora
function calculadora() {
    let continuar = true;

    while (continuar) {
        // Solicitar operação
        let operacao = prompt("Escolha uma operação: soma, subtração, multiplicação, divisão ou sair").toLowerCase();

        // Verificar a operação escolhida
        switch (operacao) {
            case "soma":
                let addNum1 = parseFloat(prompt("Digite o primeiro número:"));
                let addNum2 = parseFloat(prompt("Digite o segundo número:"));
                console.log("Resultado: " + adicao(addNum1, addNum2));
                break;
            case "subtração":
                let subNum1 = parseFloat(prompt("Digite o primeiro número:"));
                let subNum2 = parseFloat(prompt("Digite o segundo número:"));
                console.log("Resultado: " + subtracao(subNum1, subNum2));
                break;
            case "multiplicação":
                let mulNum1 = parseFloat(prompt("Digite o primeiro número:"));
                let mulNum2 = parseFloat(prompt("Digite o segundo número:"));
                console.log("Resultado: " + multiplicacao(mulNum1, mulNum2));
                break;
            case "divisão":
                let divNum1 = parseFloat(prompt("Digite o primeiro número:"));
                let divNum2 = parseFloat(prompt("Digite o segundo número:"));
                console.log("Resultado: " + divisao(divNum1, divNum2));
                break;
            case "sair":
                continuar = false;
                console.log("Até a próxima!");
                break;
            default:
                console.log("Operação inválida.");
        }
    }
}

// Chamando a função principal da calculadora
calculadora();
