function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[]{
  if(valor instanceof Array){
    return valor.map((string) => string.trim())
  } else{
    return valor.trim();
  }
}

normalizar('ola ');
normalizar(['oi ', 'hello     '])