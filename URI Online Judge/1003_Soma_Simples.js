//por Maximilliam Araujo
/*
PROBLEMA: 1003 - Soma Simples
RESPOSTA: Accepted
LINGUAGEM: JavaScript (nodejs 8.4.0) [+2s] {beta}
TEMPO: 0.076s
TAMANHO: 195 Bytes
SUBMISSÃO: 11/07/2020 17:58:31
*/
//https://www.urionlinejudge.com.br/judge/pt/problems/view/1003
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a, b] = lines.map(n => Number(n));
const soma = a + b;
console.log('SOMA = ' + soma);