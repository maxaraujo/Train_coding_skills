//por Maximilliam Araujo
/*
PROBLEMA: 1152 - Estradas Escuras
RESPOSTA: Accepted
LINGUAGEM: C (gcc 4.8.5, -O2 -lm) [+0s]
TEMPO: 2.676s
TAMANHO: 5,15 KB
SUBMISSÃO: 15/09/2015 10:09:28
*/
//TO-DO -> Reescrever em JS

#include<stdio.h>
#include<stdlib.h>

typedef int TipoChave;
typedef struct {
  int Chave;
} TipoItem;

typedef struct TipoCelula *TipoApontador;

typedef struct TipoCelula {
  TipoItem Item;
  TipoApontador Prox;
} TipoCelula;

typedef struct {
  TipoApontador Primeiro, Ultimo;
} TipoLista;

typedef struct
{
	int vertice1;
	int vertice2;
	int peso;
	int pondera;
}estradas;

typedef struct
{
	int indice;
	int valor;
	int conjunto;
}mapeamento;

void FLVazia(TipoLista *Lista)
{
	Lista -> Primeiro = (TipoApontador) malloc(sizeof(TipoCelula));
	Lista -> Ultimo = Lista -> Primeiro;
	Lista -> Primeiro -> Prox = NULL;
}

int Vazia(TipoLista Lista)
{
	return (Lista.Primeiro == Lista.Ultimo);
}

void Insere(TipoItem x, TipoLista *Lista)
{
	Lista -> Ultimo -> Prox = (TipoApontador) malloc(sizeof(TipoCelula));
	Lista -> Ultimo = Lista -> Ultimo -> Prox;
	Lista -> Ultimo -> Item = x;
	Lista -> Ultimo -> Prox = NULL;
}

void Retira(TipoApontador p, TipoLista *Lista, TipoItem *Item)
{
	TipoApontador q;
	if (Vazia(*Lista) || p == NULL || p -> Prox == NULL){
		printf(" Erro   Lista vazia ou posi  c   a o n  a o existe\n");
		return;
	}

	q = p -> Prox;
	*Item = q -> Item;
	p -> Prox = q -> Prox;
	if (p -> Prox == NULL) Lista -> Ultimo = p;
	free(q);
}

void ImprimeResposta(TipoLista Lista)
{
	TipoApontador Aux;
	Aux = Lista.Primeiro -> Prox;
	while (Aux != NULL)
	{
		printf("%d\n", Aux -> Item.Chave);
		Aux = Aux -> Prox;
	}
}

void Refaz(int Esq, int Dir, estradas *A)
{
    int i = Esq;
    int j;
    estradas x;
    j = i * 2;
    x = A[i];

    while (j <= Dir)
    {
        if (j < Dir)
        {
            if (A[j].peso < A[j+1].peso)
                j++;
        }
        if (x.peso >= A[j].peso) goto L999;
        A[i] = A[j];
        i = j;
        j = i * 2;
    }

L999:
    A[i] = x;
}

void Constroi(estradas *A, int n)
{
    int Esq;
    Esq = n / 2;
    while (Esq > 0)
    {
        Esq--;
        Refaz(Esq, n, A);
    }
}

void Heapsort(estradas *A, int n)
{
    int Esq, Dir;
    estradas x;
    Constroi(A, n);  /* constroi o heap */
    Esq = 0;
    Dir = n-1;
    while (Dir > 0)
    {
        x = A[0];
        A[0] = A[Dir];
        A[Dir] = x;
        Dir--;
        Refaz(Esq, Dir, A);
    }

}

void Imprime(estradas *A, int n){
	int i;
	for(i = 0; i < n; i++){
		printf("%d %d %d %d\n",A[i].vertice1,A[i].vertice2,A[i].peso,A[i].pondera);
	}

}

void Ponderacao(estradas *A, mapeamento *M, int n,int b){
	int i,v1,v2,j,atual;
	for(i = 0; i < n; i++){
		v1 = A[i].vertice1;
		v2 = A[i].vertice2;
		if(M[v1].valor < M[v2].valor){
			atual = M[v2].valor;
		}else{
			atual = M[v1].valor;
		}

		if(M[v1].valor != M[v2].valor){
			A[i].pondera = 0;
			if(M[v1].valor < M[v2].valor){
				if((M[v2].indice == M[v2].valor)&&(M[v2].conjunto != 0)){
					M[v2].valor = M[v1].valor;
					M[v1].conjunto = 1;
					M[v2].conjunto = 1;
				}else{
					for(j = 0; j < b; j++){
						if(M[j].valor == atual){
							M[j].valor = M[v1].valor;
						}
					}
				}
			}else{
				if((M[v1].indice == M[v1].valor)&&(M[v2].conjunto != 0)){
					M[v1].valor = M[v2].valor;
					M[v1].conjunto = 1;
					M[v2].conjunto = 1;
				}else{
					for(j = 0; j < b; j++){
						if(M[j].valor == atual){
							M[j].valor = M[v2].valor;
						}
					}
				}
			}
		}	

	}
}

int resultado(estradas *A, int n){
	int i, soma;
	soma = 0;
	for (i = 0; i < n; i++){
		soma = soma + (A[i].peso * A[i].pondera);
	}
	return soma;

}

int main(){
	int v1,v2,peso;
	int i,aux,aux2;//Contador
	int resposta;
	int tamanho;
	tamanho = 0;
	TipoLista VResposta;
  	TipoItem RespParcial;
	FLVazia(&VResposta);
	mapeamento *mapa;
	estradas *agm;
	scanf("%d%d%*[^\n]",&v1,&v2);
	while((v1+v2)!=0){
		agm = (estradas*) malloc (v2*sizeof(estradas));
		mapa = (mapeamento*) malloc (v1 * sizeof(mapeamento));
		for( i = 0; i < v1; i ++){
			mapa[i].indice = i;
			mapa[i].valor = i;
			mapa[i].conjunto = 0;
		}
		aux = v2;
		aux2 = v1;
		for(i = 0; i < aux; i++){
			scanf("%d%d%d%*[^\n]",&v1,&v2,&peso);
			agm[i].vertice1 = v1;
			agm[i].vertice2 = v2;
			agm[i].peso = peso;
			agm[i].pondera = 1;
		}

		Heapsort(agm,aux);
		Ponderacao(agm,mapa,aux,aux2);
		resposta = resultado(agm,aux);
		RespParcial.Chave = resposta;
     		Insere(RespParcial, &VResposta);
		scanf("%d%d%*[^\n]",&v1,&v2);
		free(agm);
		free(mapa);
	}
	ImprimeResposta(VResposta);
	return 0;
}
