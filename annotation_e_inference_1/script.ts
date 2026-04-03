let produto:string = "livro"
let preco:number = 2000;

const carro:{
  marca: string;
  portas: number;
} = {
  marca: "audi",
  portas: 4
}

function somar(a:number,b:number)
{
  return a + b;
}
somar(10,20);
// somar('10', 30);

const nitendo = {
  nome: "nitendo",
  preco: "2000"
}

function transformarPreco(produto: {nome: string; preco: string}){
  produto.preco = 'R$ ' + produto.preco;
  return produto
}
transformarPreco(nitendo)