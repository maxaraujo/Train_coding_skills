//Por Maximilliam Araujo
/*
PROBLEMA: 1005 - Média 1
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
TEMPO: 0.080s
TAMANHO: 254 Bytes
SUBMISSÃO: 11/06/2020 19:26:29
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B] = lines;
const media = (A*3.5 + B*7.5)/11;
const mediaPrecisao5 = parseFloat(media).toFixed(5);
console.log('MEDIA = ' + mediaPrecisao5);
