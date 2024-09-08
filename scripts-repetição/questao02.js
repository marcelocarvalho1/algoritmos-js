let menorAltura = Infinity;
let maiorAltura = -Infinity;

for (let i = 0; i < 5; i++) {
    let altura = parseFloat(prompt("Digite a altura da pessoa " + (i + 1) + ":"));

    if (altura < menorAltura) {
        menorAltura = altura;
    }
    if (altura > maiorAltura) {
        maiorAltura = altura;
    }
}
console.log("A pessoa mais baixa tem " + menorAltura + " cm de altura.");
console.log("A pessoa mais alta tem " + maiorAltura + " cm de altura.");
