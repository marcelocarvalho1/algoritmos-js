
let primeiroValor = (prompt("Digite true ou false para o primeiro valor:") === "true");
let segundoValor = (prompt("Digite true ou false para o segundo valor:") === "true");

if (primeiroValor === true && segundoValor === true) {
    console.log("Ambos os valores são true.");
} else if (primeiroValor === true || segundoValor === true) {
    console.log("Pelo menos um dos valores é true.");
} else {
    console.log("Ambos os valores são false.");
}
