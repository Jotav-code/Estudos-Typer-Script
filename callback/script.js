"use strict";
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const button = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
function handleClick(event) {
    let buttonElement = event.currentTarget;
    let navAtivo;
    if (nav instanceof HTMLElement) {
        nav.classList.toggle('active');
        navAtivo = nav.classList.contains('active');
    }
    console.log(navAtivo);
    if (buttonElement instanceof HTMLElement && navAtivo) {
        buttonElement.setAttribute('aria-label', 'Fechar Menu');
        buttonElement.setAttribute('aria-expanded', 'true');
    }
    else if (buttonElement instanceof HTMLElement && navAtivo === false) {
        buttonElement.setAttribute('aria-label', 'Abrir Menu');
        buttonElement.setAttribute('aria-expanded', 'false');
    }
}
button?.addEventListener('click', handleClick);
