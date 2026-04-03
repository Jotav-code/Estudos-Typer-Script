function retorno<T>(a: T): T{
  return a;
}

retorno('a');
retorno(200);
retorno(true);

function qualTipo<T>(a:T){
  const resultado = {
    tipo: typeof a,
    dado: a
  }
  console.log(resultado);
  return resultado;
}
qualTipo(true);
qualTipo(200);
qualTipo('hello world');

const numero = [1,2,4,5,6,7,8,9];
const frutas = ['banana', 'uva', 'pera', 'maçã', 'salada mista', 'melancia'];


function firstFive<T>(value: Array<T>){
  return value.slice(0,5);
}


const link = document.querySelector('a');


function getItem<T extends HTMLElement>(a: T){
  return {
    elemento: a,
  }
}
if(link)
  console.log(getItem(link).elemento.href)