class Produto {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

class Livro extends Produto {
  autor: string;
  constructor(nome: string, autor: string) {
    super(nome);
    this.autor = autor;
  }
}

class Jogo extends Produto {
  jogadores: number;
  constructor(nome: string, jogadores: number) {
    super(nome);
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === 'O Hobbit') {
    return new Livro('O Hobbit', 'J. R. R. Tolkien');
  }
  if (busca === 'Dark Souls') {
    return new Jogo('Dark Souls', 1);
  }
  return null;
}

const produto1 = buscarProduto('O Hobbit');
const produto2 = buscarProduto('Dark Souls');

if (produto1 instanceof Produto) {
  produto1.nome;
}
if (produto2 instanceof Produto) {
  produto2.nome;
}
