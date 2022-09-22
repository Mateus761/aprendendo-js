// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangulos (a, b, c) {
    if (a == b && b == c) {
        console.log("É um triangulo equilátero")
    }

    else if (a == b || a == c || b == c) {
        console.log("É um triangulo isósceles")
    }

    else if (a !== b && b !== c && a !== c) {
        console.log("É um triangulo Escaleno")
    }

    else {
        console.log('Valores inválidos')
    }
}

triangulos(2,2,2);