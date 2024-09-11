let count_0_25 = 0;
let count_26_50 = 0;
let count_51_75 = 0;
let count_76_100 = 0;

while (true) {
    let num = parseInt(prompt("Digite um número (Ou um número negativo para encerrar o loop):"));

    if (num < 0) {
        break;
    }
    if (num >= 0 && num <= 25) {
        count_0_25++;

    } else if (num >= 26 && num <= 50) {
        count_26_50++;

    } else if (num >= 51 && num <= 75) {
        count_51_75++;

    } else if (num >= 76 && num <= 100) {
        count_76_100++;
    }
}

console.log(`Números no intervalo [0-25]: ${count_0_25}`);
console.log(`Números no intervalo [26-50]: ${count_26_50}`);
console.log(`Números no intervalo [51-75]: ${count_51_75}`);
console.log(`Números no intervalo [76-100]: ${count_76_100}`);
