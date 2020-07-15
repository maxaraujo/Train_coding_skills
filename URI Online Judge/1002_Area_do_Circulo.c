//por Maximilliam Araujo
/*
PROBLEMA: 1002 - Área do Círculo
RESPOSTA: Accepted
LINGUAGEM: C (gcc 4.8.5, -O2 -lm) [+0s]
TEMPO: 0.000s
TAMANHO: 161 Bytes
SUBMISSÃO: 15/09/2015 23:58:26
*/
#include<stdlib.h>
#include<stdio.h>

int main(){
	double A,area;
	scanf("%lf",&A);
	area = (A*A)*3.14159;
	printf("A=%.4lf\n",area);	
	
	return 0;
}
