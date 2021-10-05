export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscrito = [];
  }

  inscrever(funcao) {
    this._inscrito.push(funcao);
  }

  desinscrever(funcao) {
    console.log(this._inscrito.length);
    this._inscrito = this._inscrito.filter((f) => f !== funcao);
    console.log(this._inscrito.length);
  }

  notificar() {
    this._inscrito.forEach((funcao) => {
      funcao(this.categorias);
    });
  }
  adicionarCategoria(novaCategoria) {
    // console.log(this.categorias);
    this.categorias.push(novaCategoria);
    this.notificar();
  }
  deletarCategoria(indice) {
    this.categorias.splice(indice, 1);
    this.notificar();
  }
}
