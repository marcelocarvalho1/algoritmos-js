let precoProduto = parseFloat(prompt("Digite o preço do produto"));
let percentual = parseFloat(prompt("Digite a porcentagem de desconto do produto"));


let valorDeDesconto = precoProduto * (percentual/100);
let precoComDesconto = precoProduto - valorDeDesconto;


console.log("Valor de desconto: R$" + valorDeDesconto.toFixed(2));
console.log("Preço do produto com desconto:  R$" + precoComDesconto.toFixed(2));

if (percentual > 50) {
    console.log("Atenção! O desconto é muito alto!");
}; 