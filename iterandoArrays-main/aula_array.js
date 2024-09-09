
const empresas = [
    { nome: 'Sansung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938 },
    { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968 },
    { nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004 },
    { nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006 },
    { nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976 }
];


// 1. Listar o nome de todas as empresa 
const nomesMapeados = empresas.map(empresa => empresa.nome);
console.log("Nomes das empresas:"); 
console.log(nomesMapeados); 

// 2. Filtrar empresa com valor de mercado 
const valorDeMercado = empresas.filter(empresa => empresa.valorDeMercado > 100);
console.log("Empresas com valor de mercado acima de 100:");
console.log(valorDeMercado);

//  3. Calcular valor total de mercado das empresas 
const valorTotal = empresas.reduce((total, empresas) => total + empresas.valor)
console.log("Valor total de mercado das empresas:", valorTotal);

// 4. econtraar empresa mais antiga
const empresaMaisAntiga = empresas.reduce((empresaAntiga, empresaAtual) => {
    if (empresaAntiga.anoDeCriacao > empresaAtual.anoDeCriacao) {
        return empresaAntiga;
    }
    return empresaAtual;
});
console.log("Empresa mais antiga:", empresaMaisAntiga.nome);

//5. Criar um novo array com o nome e CEO das empresas
const nomesECeosDasEmpresas = [];
empresas.forEach(empresa => {
    nomesECeosDasEmpresas.push({ nome: empresa.nome, CEO: empresa.CEO });
});