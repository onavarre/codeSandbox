import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    nouveauClient: ""
  };

  handleChange = (event) => {
    this.setState({ nouveauClient: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    // évite de recharger la page
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    if (nom !== "") {
      this.props.onClientAdd({ id, nom });

      this.setState({ nouveauClient: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* PAS AIMER PAR LES DEV REACT D'UTILISER ref. <input
        ref={this.clientInput}
        type="text"
        placeholder="Ajouter un client"
      ></input> */}
        <input
          value={this.state.nouveauClient}
          type="text"
          placeholder="Ajouter un client"
          onChange={this.handleChange}
        />
        <button>Ajouter</button>
      </form>
    );
  }
}

export default ClientForm;
