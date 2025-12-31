"use strict";
let produto = 'Livro';
const preco = 200;
const carro = {
    marca: 'Audi',
    portas: 5
};
const barato = 200 < 400 ? true : 'produto caro';
function somar(a, b) {
    return `${a + b}`;
}
console.log(somar(10, 4));
const nitendo = {
    nome: "Nitendo",
    preco: "2000"
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
console.log(transformarPreco(nitendo));
