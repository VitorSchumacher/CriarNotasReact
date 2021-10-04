import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./ListaDeCategorias.css";

class ListaDeCategorias extends React.Component {
  state;
  _handleEventoInput(evento) {
    if (evento.keyCode === 13) {
      this.id = uuidv4();
      this.valorCategoria = evento.target.value;
      this.props.adicionarCategoria(this.valorCategoria, this.id);
    }
  }
  apagar() {
    const identidade = this.props.id;
    this.props.deletarCategoria(identidade);
  }
  render() {
    return (
      <>
        <section className="categorias-mae">
          <ul className="lista-de-categorias_lista">
            {this.props.categorias.map((categiria, index) => {
              return (
                <li key={index} id={index} onClick={this.apagar.bind(this)}>
                  {categiria}
                </li>
              );
            })}
          </ul>
          <input
            type="text"
            placeholder="Adicionar categoria"
            onKeyUp={this._handleEventoInput.bind(this)}
          />
        </section>
      </>
    );
  }
}

export default ListaDeCategorias;
