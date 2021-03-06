import React, { Component } from "react";
import ListaDeNotas from "./Componentes/ListaDeNotas";
import FormularioCadastro from "./Componentes/FormularioCadastro/index";
import Categorias from "./Dados/Categorias";
import ArrayDeNotas from "./Dados/Notas";

import "./assets/App.css";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }
  // criarNota(titulo, texto, id, categoria) {
  //   const novaNota = { titulo, texto, id, categoria };
  //   const novoArrayNotas = [...this.state.notas, novaNota];
  //   const novoEstado = {
  //     notas: novoArrayNotas,
  //   };
  //   this.setState(novoEstado);
  // }

  // adicionarCategoria(nomeCategoria, id) {
  //   // const novaCategoria = { nomeCategoria, id };
  //   const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
  //   const novoEstado = { ...this.state, categorias: novoArrayCategorias };
  //   this.setState(novoEstado);
  // }

  // deletarNota(indice) {
  //   let arrayNotas = this.state.notas;
  //   arrayNotas.splice(indice, 1);
  //   this.setState({ notas: arrayNotas });
  // }
  // deletarCategoria(indice) {
  //   let ArrayCategorias = this.state.categorias;
  //   ArrayCategorias.splice(indice, 1);
  //   this.setState({ categorias: ArrayCategorias });
  // }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          criarNota={this.notas.adicionarNota.bind(this.notas)}
          categorias={this.categorias}
        />
        <ListaDeNotas
          notas={this.notas}
          apagarNota={this.notas.apagarNota.bind(this.notas)}
          categorias={this.categorias}
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          deletarCategoria={this.categorias.deletarCategoria.bind(this.categorias)}
        />
      </section>
    );
  }
}

export default App;
