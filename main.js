function calcularMedia() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, insira todas as notas corretamente.");
        return;
    }

    let somaNotas = nota1 + nota2 + nota3;
    let media = somaNotas / 3;

    if (nota1 < 6 || nota2 < 6 || nota3 < 6 || somaNotas < 18) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<h2>Média: ${media.toFixed(2)}</h2><p>Status: Reprovado</p>`;
        return;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h2>Média: ${media.toFixed(2)}</h2><p>Status: Aprovado</p>`;
}
