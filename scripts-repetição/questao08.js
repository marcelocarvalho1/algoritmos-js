
function gerarPA(valorInicial, razao, quantidade) {
    let resultado = [];
    for (let i = 0; i < quantidade; i++) {
        let termo = valorInicial + i * razao;
        resultado.push(termo);
    }
    return resultado;
}


const valorInicial = 2; 
const razao = 3;        
const quantidade = 10; 


const pa = gerarPA(valorInicial, razao, quantidade);
console.log('Sequência em P.A.:', pa);
