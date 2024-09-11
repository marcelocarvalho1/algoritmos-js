function calcularFatorial(A) {
    let fatorial = 1;
    let sequencia = '';

    for (let i = A; i > 0; i--) {
        fatorial *= i;
        sequencia += i;

        if (i > 1) {
            sequencia += ' x ';
        }
    }
    console.log(`${A}! = ${sequencia} = ${fatorial}`);
}

let A = 5; 
calcularFatorial(A);
