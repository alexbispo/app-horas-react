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
    const response = await api.get("/");

    this.setState({ apontamentos: response.data.docs })
  }

  render() {
    const { apontamentos } = this.state;
    return (
      <div className="apontamento-list">
        {apontamentos.map(apontamento =>(
          <article key={apontamento._id}>
            <strong>{apontamento.dia}</strong>
            <p>Entrou: {apontamento.entrada.hora}:{apontamento.entrada.minuto}</p>
            <p>Saiu: {apontamento.saida.hora}:{apontamento.saida.minuto}</p>
          </article>
        ))}
      </div>
    )
  }
}
