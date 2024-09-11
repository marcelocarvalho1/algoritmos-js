
let valor1 = 2; 
let valor2 = 5;
let valor3 = 50;

if (valor1 < valor2) {
    let aux = valor1;
    valor1 = valor2;                     
    valor2 = aux;
}

if (valor1 < valor3) {
    let aux = valor1;
    valor1 = valor3;
    valor3 = aux;
}

if (valor2 < valor3) {
    let aux = valor2;
    valor2 = valor3;
    valor3 = aux;
}

console.log(`Os valores estão sendo exibidos em ordem descrescente: ${valor1}, ${valor2}, ${valor3}`);



