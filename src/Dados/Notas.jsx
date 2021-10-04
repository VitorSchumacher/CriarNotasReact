export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    this._inscrito = [];
  }
  adicionarNota(titulo, texto, id, categoria) {
    const novaNota = new Nota(titulo, texto, id, categoria);
    this.notas.push(novaNota);
  }
  apagarNota(indice) {
    this.notas.splice(indice, 1);
  }
  incerver(funcao) {
    this._inscrito.push(funcao);
  }

  notificar() {
    this._inscrito.forEach((funcao) => {
      funcao(this.categorias);
    });
  }
}

class Nota {
  constructor(titulo, texto, id, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.id = id;
    this.categoria = categoria;
  }
}
