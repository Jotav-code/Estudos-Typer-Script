"use strict";
const links = document.querySelectorAll('.link');
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        link.style.color = 'red';
    }
    else if (link instanceof HTMLButtonElement) {
        link.style.color = 'red';
    }
});


add