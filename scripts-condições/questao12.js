function calcularMediaAproveitamento() {
    // Entrada de dados
    const numeroIdentificacao = prompt("Digite o número de identificação do aluno:");
    const nota1 = parseFloat(prompt("Digite a nota 1:"));
    const nota2 = parseFloat(prompt("Digite a nota 2:"));
    const nota3 = parseFloat(prompt("Digite a nota 3:"));
    const ME = parseFloat(prompt("Digite a média dos exercícios:"));

    const MA = (nota1 + (nota2 * 2) + (nota3 * 3) + ME) / 7;

    let conceito = '';
    if (MA >= 90) {
        conceito = 'A';
    } else if (MA >= 75 && MA < 90) {
        conceito = 'B';
    } else if (MA >= 60 && MA < 75) {
        conceito = 'C';
    } else if (MA >= 40 && MA < 60) {
        conceito = 'D';
    } else {
        conceito = 'E';
    }

    console.log("Número do aluno: " + numeroIdentificacao);
    console.log("Notas: " + nota1 + ", " + nota2 + ", " + nota3);
    console.log("Média dos Exercícios: " + ME);
    console.log("Média de Aproveitamento: " + MA.toFixed(2));
    console.log("Conceito: " + conceito);

    if (conceito === 'A' || conceito === 'B' || conceito === 'C') {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}


calcularMediaAproveitamento();
