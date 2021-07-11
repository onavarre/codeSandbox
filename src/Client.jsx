import React, { Component } from "react";

class Client extends Component {
  render() {
    // const details = this.props.details;
    // const onDelete = this.props.onDelete;

    const { details, onDelete } = this.props;

    return (
      <li key={details.id}>
        {details.nom}{" "}
        <button onClick={() => onDelete(details.id)}> Supprimer</button>
      </li>
    );
  }
}
export default Client;
