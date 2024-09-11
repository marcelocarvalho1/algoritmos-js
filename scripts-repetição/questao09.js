function progressaoGeometrica(A, R) {
    let sequencia = "";
    let valorAtual = A;

    for (let i = 0; i < 10; i++) {
        if (i === 9) {
            sequencia += valorAtual;  
        } else {
            sequencia += valorAtual + " X ";  
        }
        valorAtual *= R;  
    }

    return sequencia;
}

const A = parseFloat(prompt("Digite o valor inicial A:"));
const R = parseFloat(prompt("Digite a razão R:"));

console.log(progressaoGeometrica(A, R));
