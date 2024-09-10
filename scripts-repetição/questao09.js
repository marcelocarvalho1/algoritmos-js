function progressaoGeometrica(A, R) {
    let sequencia = "";
    let valorAtual = A;

    for (let i = 0; i < 10; i++) {
        if (i === 9) {
            sequencia += valorAtual;  // Adiciona o último valor sem " X "
        } else {
            sequencia += valorAtual + " X ";  // Adiciona os valores intermediários com " X "
        }
        valorAtual *= R;  // Atualiza o valor para o próximo termo
    }

    return sequencia;
}


const A = parseFloat(prompt("Digite o valor inicial A:"));
const R = parseFloat(prompt("Digite a razão R:"));
console.log(progressaoGeometrica(A, R));
