"use strict";
let total = "200";
function inNumber(value) {
    if (typeof value === 'number') {
        return true;
    }
    else {
        return false;
    }
}
inNumber(total);
const button = document.querySelector('button');
button?.click();
