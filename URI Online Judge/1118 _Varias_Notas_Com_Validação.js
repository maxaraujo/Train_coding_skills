// por Maximilliam Araújo
// PROBLEMA: 1118 - Várias Notas Com Validação
// RESPOSTA: Accepted
// LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
// TEMPO: 0.152s
// TAMANHO: 684 Bytes
// SUBMISSÃO: 17/07/2020 21:57:22

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const notas = [];
let comando = 1;
do {
  if (comando == 1) {
    while (true) {
      let nota = Number(lines.shift());
      if (nota >= 0 && nota <= 10) {
        notas.push(nota);
        if (notas.length === 2) {
          let media = (notas.shift() + notas.shift()) / 2;
          console.log(`media = ${media.toFixed(2)}`);
          break;
        }
      } else {
        console.log('nota invalida');
      }
    }
  }
  console.log('novo calculo (1-sim 2-nao)');
  comando = Number(lines.shift());
} while (comando != 2);