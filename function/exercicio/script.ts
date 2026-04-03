// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function retornarNumero(value:number):number;
function retornarNumero(value:string):number;
function retornarNumero(value: number | string):number{
  if(typeof value === 'number'){
    return Math.ceil(value);
  } else if(typeof value === 'string'){
    let converte_number = +value;
      if(typeof converte_number === 'number'){
        return Math.ceil(converte_number);
      }
      else{
        return 1
      }
  }else{
    return 1
  }
}
retornarNumero(22).toFixed
retornarNumero('22').