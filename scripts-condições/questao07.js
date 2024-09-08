let numero = parseInt(prompt("Digite um número"));
if (numero % 2 === 0) {
    console.log(`O número é par ${numero} então irei somar mais 5 no valor, que agora será ${numero + 5} `);
} else if (numero % 2 === 1) {
    console.log(`O número é ímpar ${numero} então irei somar mais 8 no valor, que agora será ${numero + 8} `);
}