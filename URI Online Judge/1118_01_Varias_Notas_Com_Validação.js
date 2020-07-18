// por Maximilliam Araújo
// PROBLEMA: 1118 - Várias Notas Com Validação
// RESPOSTA: Accepted
// LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
// TEMPO: 0.144s
// TAMANHO: 1,04 KB
// SUBMISSÃO: 18/07/2020 16:30:18
// Abordagem mais declarativa
/* Em comparação a abordagem mais imperativa, o tamanho do arquivo aumento
** consideravelmente. Entretanto aconteceu um aumento de desempenho de 0.08s
*/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const SIM = 1;
const NAO = 2;
const fazerCalculo = (simNao) => simNao === SIM;
const calculaNovamente = (simNao) => simNao !== NAO;
const pegaNota = () => Number(lines.shift());
const ehNotaValida = (nota) => nota >= 0 && nota <= 10;
const temDuasNotas = (notas) => notas.length === 2;
const calculaMedia = (nota1, nota2) => (nota1 + nota2)/2;
const imprimeMedia = (media) => console.log(`media = ${media.toFixed(2)}`);

let simNao = SIM;
const notas = [];
do {
  if (fazerCalculo(simNao)) {
    while (true) {
      let nota = pegaNota();
      if (ehNotaValida(nota)) {
        notas.push(nota);
        if (temDuasNotas(notas)) {
          let media = calculaMedia(notas.shift(), notas.shift());
          imprimeMedia(media);
          break;
        }
      } else {
        console.log('nota invalida');
      }
    }
  }
  console.log('novo calculo (1-sim 2-nao)');
  simNao = Number(lines.shift());
} while (calculaNovamente(simNao));