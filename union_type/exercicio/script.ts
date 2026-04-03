/*
Criar uma função chamada toNumber
A função pode receber number | string
Se a função receber um numero retorne o numero
Se a função receber uma string retorne um numero
Se ela receber algo diferente retorne um erro. (throw "value deve ser um número ou string")

*/

function toNumber(value: number | string): number{
  if(typeof value === "number"){
    return value;
  }
  else if(typeof value === "string"){
    return +value;
  }else{
    throw("Passe uma string ou numero")
  }
}