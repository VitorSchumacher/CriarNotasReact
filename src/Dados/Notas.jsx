export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    this._inscrito = [];
  }
  adicionarNota(titulo, texto, id, categoria) {
    const novaNota = new Nota(titulo, texto, id, categoria);
    this.notas.push(novaNota);
    this.notificar();
  }
  apagarNota(indice) {
    this.notas.splice(indice, 1);
    this.notificar();
  }
  inscrever(funcao) {
    this._inscrito.push(funcao);
  }
  desinscrever(funcao){
    this._inscrito = this._inscrito.filter(f=> f!== funcao);
  }

  notificar() {
    this._inscrito.forEach((funcao) => {
      funcao(this.notas);
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
