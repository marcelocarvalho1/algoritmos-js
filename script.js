// // estrutura sequencial
let primeiroNum = parseInt(prompt("Digite o primeiro numero:"));
let segundoNum = parseInt(prompt("Digite o segundo numero:"));
let soma = primeiroNum + segundoNum;
console.log("A soma dos dois números é: " + soma);

// //estrutura de decisão
let num = parseInt(prompt("Digite um numero:"));
if (num > 0) {
    console.log("O número é positivo.");
} else {
    console.log("O número é negativo ou igual a zero.");
}

//estrutura de repetição
let contador = 1;
while (contador <= 10) {
    console.log("contador:", contador);
    contador++;
}

//estrutura de controle
for (let i = 0; i <10; i++) {
    if(i % 2 == 0) {
        console.log(i, "Número par:");
    } else {
        console.log(i, "é impar")
    }
}
