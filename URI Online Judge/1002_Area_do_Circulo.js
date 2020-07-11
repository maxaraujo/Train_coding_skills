//Por Maxilliam Araujo
/*
PROBLEMA: 1002 - Área do Círculo
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
TEMPO: 0.092s
TAMANHO: 216 Bytes
SUBMISSÃO: 11/07/2020 17:48:54
*/
//https://www.urionlinejudge.com.br/judge/pt/problems/view/1002

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const raio = parseFloat(lines.shift());
const area = 3.14159 * (raio * raio);

console.log('A='+ area.toFixed(4));