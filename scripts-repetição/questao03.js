let soma = 0;
let totalValores = 0;
let positivos = 0;
let negativos = 0;

while (true) {

  let input = prompt("Digite um número (ou 'sair' para finalizar):");

  if (input.toLowerCase() === 'sair') break;


  let valor = parseFloat(input);

  if (!isNaN(valor)) {
    totalValores++;   
    soma += valor;    

    if (valor > 0) {
      positivos++;
    } else if (valor < 0) {
      negativos++;
    }
  } else {
    console.log("Entrada inválida, por favor insira um número.");
  }
}

let media = totalValores > 0 ? soma / totalValores : 0;
let percentualPositivos = totalValores > 0 ? (positivos / totalValores) * 100 : 0;
let percentualNegativos = totalValores > 0 ? (negativos / totalValores) * 100 : 0;

console.log(`Média dos valores: ${media.toFixed(2)}`);
console.log(`Total de valores positivos: ${positivos}`);
console.log(`Total de valores negativos: ${negativos}`);
console.log(`Percentual de positivos: ${percentualPositivos.toFixed(2)}%`);
console.log(`Percentual de negativos: ${percentualNegativos.toFixed(2)}%`);
