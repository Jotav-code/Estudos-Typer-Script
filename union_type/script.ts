let total: number | string = "200";


function inNumber(value: number | string){
  if(typeof value === 'number'){
    return true;
  }
  else{
    return false
  }
}
inNumber(total);

const button = document.querySelector('button');

button?.click();