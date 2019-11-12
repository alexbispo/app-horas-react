import React, { Component } from 'react';

import api from '../../services/api';
import './styles.css';

export default class Main extends Component {

  state = {
    apontamentos: []
  }

  componentDidMount() {
    this.buscarApontamentos();
  };

  buscarApontamentos = async () => {
    const response = await api.get("/apontamentos");

    this.setState({ apontamentos: response.data.docs })
  }

  render() {
    const { apontamentos } = this.state;
    return (
      <div className="apontamento-list">
        {apontamentos.map(apontamento =>(
          <article key={apontamento._id}>
            <h3>{apontamento.dia}</h3>
            <div className="detalhe">
              <div className="entrada">Entrou: {apontamento.entrada}</div>
              <div className="saida">Saiu: {apontamento.saida}</div>
              <div className="pausa">Pausa: {apontamento.totalPausas}</div>
              <div className="total">Total: {apontamento.total}</div>
            </div>
          </article>
        ))}
      </div>
    )
  }
}
