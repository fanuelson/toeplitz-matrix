# Challenge - Matriz de Toeplitz

No contexto da álgebra linear, uma subárea da matemática, uma matriz de Toeplitz ou matriz de diagonais constantes, 
é uma matriz em que cada diagonal descendente da esquerda para a direita tem valor constante. 

Exemplo:
```
const matrixIsToeplitz = [
    [6, 7, 8, 9],
    [4, 6, 7, 8],
    [1, 4, 6, 7],
    [0, 1, 4, 6],
    [2, 0, 1, 4],
];
```

## Objetivo
Escrever um método que dada uma matriz, verifica se ela é Toeplitz.

## Abordagem

Considere um elemento no índice (i, j) da matriz de dimensão (m, n). Para que a matriz seja diagonal constante, todos os elementos da diagonal devem ser iguais. Considere a diagonal que contém este elemento (i, j). Os demais elementos desta diagonal terão seu índice na forma (i + k, j + k) ou (i-k, j-k). Observe que, quaisquer que sejam os valores de x e y desses índices, sua diferença é sempre a mesma. ou seja, (i + k) - (j + k) == (i-k) - (j-k) == i-j.

O diagrama abaixo dá uma melhor visualização dessa ideia. Considere a diagonal que começa em 2-0. A diferença entre o valor i e o valor j de qualquer índice nesta diagonal é 2 (2-0, 3-1, 4-2). O mesmo pode ser observado para todas as diagonais do corpo.

```
[0-0, 0-1, 0-2, 0-3]
[1-0, 1-1, 1-2, 1-3]
[2-0, 2-1, 2-2, 2-3]
[3-0, 3-1, 3-2, 3-3]
[4-0, 4-1, 4-2, 4-3]
```


- Time Complexity: O(mn)
- Space Complexity: O(m+n)
- (m = número de colunas, n = número de linhas)