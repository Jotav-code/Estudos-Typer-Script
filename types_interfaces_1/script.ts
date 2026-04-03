type Produto = {
nome: string;
  preco: number;
  teclado: boolean

}
function body(produto: Produto){
  return document.body.innerHTML += `
    <h1>${produto.nome}</h1>
    <p>${produto.preco}</p>
    <p>INclue teclado: ${produto.teclado ? 'Sim' : 'Não'}</p>
  `
}

body({
  nome: "Computador",
  preco: 2000,
  teclado: true
})
body({
  nome: "Notebook",
  preco: 2000,
  teclado: false
})

type Categoria = 'codigo' | 'design' | 'descod'

function pintarCategoria (categoria: Categoria){
  return categoria
}

pintarCategoria('codigo')