import React, { Component } from "react";
import CardNota from "../CardNota";
import ListaDeCategorias from "../ListaDeCateorias";

import "./ListaDeNotas.css";

class ListaDeNotas extends Component {
  // deletarNota(id){
  //   if(this.nota.id === id){
  //     this.nota.shift();
  //   }
  // }
  constructor() {
    super();
    this.state = { notas: [] };
    this._novasNotas = this._novasNotas.bind(this);
  }
  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }
  componentWillUnmount(){
    this.props.notas.desinscrever(this._novasNotas);
  }
  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }
  render() {
    return (
      <>
        <section className="section-lista-de-notas">
          <ListaDeCategorias
            categorias={this.props.categorias}
            adicionarCategoria={this.props.adicionarCategoria.bind(this)}
            deletarCategoria={this.props.deletarCategoria}
          />
          <div className="lista-notas_mae">
            <h3 className="titulo-lista_header">Suas notas:</h3>
            <ul className="lista-notas">
              {this.state.notas.map((nota, index) => {
                return (
                  <li className="lista-notas_item" key={index}>
                    <CardNota
                      titulo={nota.titulo}
                      texto={nota.texto}
                      id={index}
                      apagarNota={this.props.apagarNota}
                      categoria={nota.categoria}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </>
    );
  }
}
export default ListaDeNotas;
