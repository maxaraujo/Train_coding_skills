// Por Maximilliam Araujo
// PROBLEMA: 1006 - Média 2
// RESPOSTA: Accepted
// LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
// TEMPO: 0.076s
// TAMANHO: 294 Bytes
// SUBMISSÃO: 11/06/2020 19:32:08

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B, C] = lines;
const [a, b, c] = [2, 3, 5];
const media = (A*a + B*b + C*c)/(a+b+c);
const mediaPrecisa = parseFloat(media).toFixed(1);
console.log('MEDIA = ' + mediaPrecisa);