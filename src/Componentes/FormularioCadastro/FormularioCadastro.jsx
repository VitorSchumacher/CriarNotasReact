import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import "./FormularioCadastro.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.id = "";
    this.categoria = "";
    this.state = { categorias: [] };
    this._novasCategorias = this._novasCategorias.bind(this);
  }
  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }
  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }
  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }
  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.id = uuidv4();
    this.props.criarNota(this.titulo, this.texto, this.id, this.categoria);
  }

  render() {
    return (
      <>
        <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
          <h3 className="titulo-cadastro_header">Digite sua nota:</h3>
          <select
            className="cadastro-de-categrias_input"
            onChange={this._handleMudancaCategoria.bind(this)}
          >
            <option className="opcao-para-categoria_escrita"> </option>
            {this.state.categorias.map((categoria, index) => {
              return <option key={index} className="opcao-para-categoria_escrita">{categoria}</option>;
            })}
          </select>
          <input
            type="text"
            placeholder="Titulo"
            className="form-cadastro_input"
            onChange={this._handleMudancaTitulo.bind(this)}
          />
          <textarea
            rows={15}
            placeholder="Escreva a sua nota"
            className="form-cadastro_input"
            onChange={this._handleMudancaTexto.bind(this)}
          />
          <button className="form-cadastro_input form-cadastro_submit">
            Criar nota
          </button>
        </form>
      </>
    );
  }
}
export default FormularioCadastro;
