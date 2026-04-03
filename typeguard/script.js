"use strict";
//precisamos garantir que o dado vai existir
function typeGuard(value) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    if (typeof value === 'number') {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
typeGuard('Origamid');
typeGuard(200);
typeGuard(document.body);
async function getProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    handleProduto(data);
}
function handleProduto(data) {
    if ('preco' in data) {
        return document.body.innerHTML += `
    <p>${data.nome}</p>
    <p>${data.preco}</P>
  `;
    }
}
