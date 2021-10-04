import React  from "react";
import { Component } from "react";
// import {ReactComponent as DeleteSvg} from "../../assets/Img/delete.svg"

import "./CardNota.css"

// const deletarNota = (taskId) => {
//   const newTask = tasks.filter(task => task.id !== taskId);

//   setTasks(newTask);
// };

class CardNota extends Component {
  apagar(){
    const id = this.props.id;
    this.props.apagarNota(id);
  }
  
  render() {
    return (
      <>
        <section className="card-nota">
          <header className="card-nota_cabecalho">
            <h3 className="card-nota_titulo">{this.props.titulo}</h3>
            <h4>{this.props.categoria}</h4>
            {/* <DeleteSvg/> */}
            <button className="deletar-nota" onClick={this.apagar.bind(this)}>X</button>
          </header>
          <p className="card-nota_texto">{this.props.texto}</p>
        </section>
      </>
    );
  }
}

export default CardNota;
