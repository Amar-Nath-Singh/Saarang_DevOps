import React, { Component } from "react";
import axios from "axios";
import "./items.css";
class ItemCart extends Component {
  state = {};
  render() {
    return (
      // <div>
      //   <div className="itemBox">
      //     <img src={this.props.image} alt={this.props.itemName}>
      //     </img>
      //     <button type="button" className="close sticky-top" aria-label="Close" onClick={() => this.removeItem(this.props.id)}>
      //       <span aria-hidden="true">&times;</span>
      //     </button>
      //     <p>{this.props.itemName}</p>
      //     <p>{this.props.description}</p>
      //     <p>{this.props.price}</p>
      //     <p>{this.props.size}</p>
      //     {/* <button
      //       className="btn btn-outline-secondary"
      //       onClick={() => this.removeItem(this.props.id)}
      //     >
      //       Remove
      //     </button> */}
      //   </div>
      // </div>
      <div className="card itemBox">
        <img
          className="card-img-top"
          src={this.props.image}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.itemName}</h5>
          <h6 className="card-text">{this.props.price}</h6>
          <p className="card-text">{this.props.description}</p>
          <p className="card-text">{this.props.size}</p>
          <div className="buyoptions">
            <button
              onClick={() => this.removeItem(this.props.id)}
              className="btn btn-primary position-relative add-button"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
  removeItem = (id) => {
    axios
      .delete("http://localhost:5000/dataset/delete/" + id)
      .then((response) => console.log("Deleted Item " + id))
      .catch((error) => {
        console.log(error);
      });
  };
}

export default ItemCart;
