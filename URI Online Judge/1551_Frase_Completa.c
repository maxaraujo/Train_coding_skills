//por Maximilliam Araujo
/*
PROBLEMA: 1551 - Frase Completa
RESPOSTA: Accepted
LINGUAGEM: C (gcc 4.8.5, -O2 -lm) [+0s]
TEMPO: 0.000s
TAMANHO: 774 Bytes
SUBMISSÃO: 24/09/2015 23:59:49
*/
//TO-DO: Reescrever em JS

#include<stdio.h>
#include<stdlib.h>

int main()
{
	int i,j,linhas,soma;
	char ch;	
	int tabela [123];
	soma = 0;
	
	scanf("%d\n",&linhas);
	int resposta[linhas];
	for(j = 0; j < linhas; j++){
		for(i = 96; i < 123; i++){
			tabela[i] = 0;
		}
	
		while((ch = getc(stdin)) != '\n'){
			if(ch > 96 && ch < 123){
				tabela[ch] = 1;			
			}
		}
		
		for(i = 96; i < 123; i++){
			soma = soma + tabela[i];
		}

		resposta[j] = soma;
		soma = 0;
	}
	
	for(j = 0; j < linhas; j++){
		if(resposta[j] == 26){
			printf("frase completa\n");
		}
		else if(resposta[j] < 26 & resposta[j] > 13){
			printf("frase quase completa\n");
		}else{
			printf("frase mal elaborada\n");
		}
	}
	
return 0;
}
