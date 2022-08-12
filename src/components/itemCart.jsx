import React, { Component } from "react";
import axios from "axios";
class ItemCart extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="itemBox">
          <img src={this.props.image} alt={this.props.itemName}></img>
          <p>{this.props.itemName}</p>
          <p>{this.props.description}</p>
          <p>{this.props.price}</p>
          <p>{this.props.size}</p>
          <button
            className="btn btn-outline-secondary"
            onClick={() => this.removeItem(this.props.id)}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
  removeItem = (id) => {
    axios
      .delete("http://localhost:5000/dataset/delete/"+id)
      .then((response) => console.log("Deleted Item " + id))
      .catch((error) => {
        console.log(error);
      });
  };
}

export default ItemCart;
