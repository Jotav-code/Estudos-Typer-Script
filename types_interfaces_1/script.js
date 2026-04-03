"use strict";
function body(produto) {
    return document.body.innerHTML += `
    <h1>${produto.nome}</h1>
    <p>${produto.preco}</p>
    <p>INclue teclado: ${produto.teclado ? 'Sim' : 'Não'}</p>
  `;
}
body({
    nome: "Computador",
    preco: 2000,
    teclado: true
});
body({
    nome: "Notebook",
    preco: 2000,
    teclado: false
});
function pintarCategoria(categoria) {
    return categoria;
}
pintarCategoria('codigo');
