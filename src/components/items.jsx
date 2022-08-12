import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Select from "react-select";
import axios from "axios";
import "./items.css";
class Items extends Component {
  state = { count: 0, selected: "S", size: "S" };
  options = [
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
  ];
  buy_data = {
    itemName: this.props.itemName,
    description: this.props.description,
    price: this.props.price,
    image: this.props.image,
    size: null,
  };
  render() {
    return (
      <div className="itemframe">
        <img className="imagebox" src={this.props.image} width="200" alt="" />
        <h4 className="itemname">{this.props.itemName}</h4>
        <div className="AddCart">
          <Select
            className="size"
            options={this.options}
            defaultValue={{ value: "S", label: "S" }}
            onChange={(value) => this.setState({ size: value.value })}
          ></Select>
          <button
            onClick={this.incCount}
            className="btn btn-primary position-relative add-button"
          >
            Add to Cart
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {this.formatCount()}
            </span>
          </button>
          {/* <button onClick={this.decCount} className="btn btn-primary position-relative add-button"> - </button> */}
        </div>
      </div>
    );
  }
  decCount = () => {
    this.setState(
      this.state.count > 0 ? { count: this.state.count - 1 } : { count: 0 }
    );
  };
  handleSelect = (event) => {
    console.log(event.target.innerHTML, this);
  };
  formatCount() {
    const { count } = this.state;
    return count === 0 ? 0 : count;
  }
  incCount = () => {
    const buy_data = {
      itemName: this.buy_data.itemName,
      description: this.buy_data.description,
      price: this.buy_data.price,
      size: this.state.size,
      image: this.buy_data.image,

    };
    axios
      .post("http://localhost:5000/dataset/add", buy_data)
      .then((res) => console.log(res.data));
    this.setState({ count: this.state.count + 1 });
  };
}

export default Items;
