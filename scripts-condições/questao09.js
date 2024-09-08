function calcularPeso(altura, sexo) {
    let pesoIdeal;

    if (sexo.toLowerCase() === 'masculino') {
        peso = (72.7 * altura) - 58;

    } else if (sexo.toLowerCase() === 'feminino') {
        peso = (62.1 * altura) - 44.7;

    } else {
        return "Sexo inválido. Use 'masculino' ou 'feminino'.";
    }
    return `O peso ideal é ${peso.toFixed(2)} kg.`;
}


let altura = parseFloat(prompt("Digite a altura em metros:"));
let sexo = prompt("Digite o sexo (masculino/feminino):");

let resultado = calcularPeso(altura, sexo);

console.log(`${resultado}`);
