// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function valores (dividendo, divisor) {
    let divisao = dividendo / divisor;
    let resto = dividendo % divisor;
    return [Math.floor(divisao), resto];
}

console.log(valores(5,2));