export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscrito = [];
  }

  incerver(funcao) {
    this._inscrito.push(funcao);
  }

  notificar() {
    this._inscrito.forEach((funcao) => {
      funcao(this.categorias);
    });
  }
  adicionarCategoria(novaCategoria) {
    console.log(this._inscrito);
    this.categorias.push(novaCategoria);
  }
  deletarCategoria(indice) {
    this.categorias.splice(indice, 1);
  }
}
