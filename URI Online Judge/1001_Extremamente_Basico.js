//Por Maxilliam
//linguagem: javascript
//problema: 1001 Extremamente Básico
//https://www.urionlinejudge.com.br/judge/pt/problems/view/1001

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a, b] = lines.map(n => Number(n));
const x = a + b;
console.log(`X = ${x}`);