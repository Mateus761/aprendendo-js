const impirimirResultado = function(nota) {
    if(!isNaN(nota)){
    if(nota >= 7){
        console.log('Aprovado!');
    } else {
        console.log('Reprovado!');
    }
}
}

impirimirResultado(10);
impirimirResultado(4);
impirimirResultado('Epa!'); // cuidado!!!

