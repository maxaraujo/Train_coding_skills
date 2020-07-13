//Por Maximilliam Araujo
/*
1004 - Produto Simples
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
TEMPO: 0.064s
TAMANHO: 191 Bytes
SUBMISSÃO: 11/06/2020 19:14:56
*/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a, b] = lines;
const PROD = Number(a) * Number(b);
console.log('PROD = ' + PROD);