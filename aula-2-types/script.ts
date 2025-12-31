let produto: string = 'Livro'
const preco: number = 200

const carro: {
  marca: string;
  portas: number;
} = {
  marca: 'Audi',
  portas: 5
}

const barato: boolean | string = 200 < 400 ? true : 'produto caro'

function somar(a:number, b:number): string{
  return `${a + b}`;
}

console.log(somar(10,4));

const nitendo = {
  nome: "Nitendo",
  preco: "2000"
}

function transformarPreco(produto : {nome: string; preco: string}){
  produto.preco = 'R$ ' + produto.preco
  return produto 
}

console.log(transformarPreco(nitendo))