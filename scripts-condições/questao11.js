function calcularPrecoFinal(precoEtiqueta, condicaoPagamento) {
    let precoFinal;

    switch (condicaoPagamento) {
        case 1:
            precoFinal = precoEtiqueta * 0.90;
            break;
        case 2:
            precoFinal = precoEtiqueta * 0.85;
            break;
        case 3:
            precoFinal = precoEtiqueta;
            break;
        case 4:
            precoFinal = precoEtiqueta * 1.10;
            break;
        default:
            console.log("Condição de pagamento inválida.");
            return;
    }

    console.log(`O valor a ser pago é R$ ${precoFinal.toFixed(2)}`);
}

const precoEtiqueta = 100.00;
const condicaoPagamento = 2; 
calcularPrecoFinal(precoEtiqueta, condicaoPagamento);
