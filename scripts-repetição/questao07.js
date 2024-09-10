
let N = parseInt(prompt("Digite um número entre 1 e 10:"));


if (N >= 1 && N <= 10) {
    console.log(`Tabuada de ${N}:`);
    for (let i = 0; i <= 10; i++) {
        console.log(`${i} x ${N} = ${i * N}`);
    }
} else {
    console.log("Número fora do intervalo! Digite um número entre 1 e 10.");
}
