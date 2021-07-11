import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";

import "./styles.css";

class App extends React.Component {
  // Pas aimer par les dev react
  // clientInput = React.createRef();

  state = {
    clients: [
      { id: 1, nom: "Olivier" },
      { id: 2, nom: "Lin" },
      { id: 3, nom: "Raphael" }
    ]
  };

  // handleClick() {
  //   console.log(this.state);
  // }
  // handleClick = () => {
  //   console.log(this.state);
  //   this.setState({ compteur: this.state.compteur + 1 });
  // };
  // handleClick = () => {
  //   const clients = this.state.clients.slice(); // copy la liste des clients
  //   clients.push({ id: 4, nom: "mon nom" });

  //   this.setState({ clients: clients });
  // };

  handleDelete = (id) => {
    const clients = [...this.state.clients];
    const index = clients.findIndex((c) => c.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
  };

  handleAdd = (client) => {
    const clients = [...this.state.clients];

    clients.push(client);
    this.setState({ clients });
  };

  render() {
    const title = "Liste des clients";

    return (
      <div>
        <h1>{title}</h1>
        {/* <button onClick={this.handleClick.bind(this)}> click</button> */}
        {/* <button onClick={() => this.handleClick(this)}> click</button> */}
        {/* <button onClick={this.handleClick}> click</button> {this.state.compteur} */}
        {/* NE PAS MANIPULER LE DOM, PAS DE QUERYSELECTOR */}
        <ul>
          {this.state.clients.map((client) => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
