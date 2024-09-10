let num;
let somaPares = 0;
let somaTotal = 0;
let qtdPares = 0;
let qtdImpares = 0;
let qtdTotal = 0;

do {
    num = parseInt(prompt("Digite um número positivo (ou 0 para encerrar):"));

    if (num > 0) {
        somaTotal += num;
        qtdTotal++;

        if (num % 2 === 0) {
            somaPares += num;
            qtdPares++;
        } else {
            qtdImpares++;
        }
    }
} while (num !== 0);

if (qtdPares > 0) {
    console.log("Média dos valores pares: " + (somaPares / qtdPares).toFixed(2));
} else {
    console.log("Não foram digitados números pares.");
}

if (qtdTotal > 0) {
    console.log("Média geral dos números lidos: " + (somaTotal / qtdTotal).toFixed(2));
} else {
    console.log("Nenhum número foi digitado.");
}

console.log("Quantidade de números pares: " + qtdPares);
console.log("Quantidade de números ímpares: " + qtdImpares);
