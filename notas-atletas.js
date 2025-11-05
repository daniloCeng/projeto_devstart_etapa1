// Programa para calcular a média válida dos atletas (desconsidera maior e menor nota)

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMediaValida(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    const atleta = atletas[i];
    const notas = atleta.notas;

    // Para exibir as notas em um formato semelhante ao do enunciado
    // usamos o .sort() padrão (que ordena como strings)
    const notasParaExibir = [...notas].sort();

    // Para calcular a média válida precisamos ordenar numericamente
    const notasOrdenadasNumericas = [...notas].sort((a, b) => a - b);
    // Remove a menor e a maior (pega as 3 notas do meio)
    const notasComputadas = notasOrdenadasNumericas.slice(1, 4);

    const soma = notasComputadas.reduce((acc, val) => acc + val, 0);
    const media = soma / notasComputadas.length;

    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notasParaExibir.join(',')}`);
    console.log(`Média Válida: ${media}`);
    console.log('');
  }
}

calcularMediaValida(atletas);
