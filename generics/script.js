"use strict";
function retorno(a) {
    return a;
}
retorno('a');
retorno(200);
retorno(true);
function qualTipo(a) {
    const resultado = {
        tipo: typeof a,
        dado: a
    };
    console.log(resultado);
    return resultado;
}
qualTipo(true);
qualTipo(200);
qualTipo('hello world');
const numero = [1, 2, 4, 5, 6, 7, 8, 9];
const frutas = ['banana', 'uva', 'pera', 'maçã', 'salada mista', 'melancia'];
function firstFive(value) {
    return value.slice(0, 5);
}
