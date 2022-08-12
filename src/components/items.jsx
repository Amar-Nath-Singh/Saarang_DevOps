import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Select from "react-select";
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
  render() {
    return (
      <div className="itemframe">
        <img className="imagebox" src={this.props.image} width="200" alt="" />
        <h4 className="itemname">{this.props.itemName}</h4>
        <div className="AddCart">
          <Select
            className="size"
            options={this.options}
            defaultValue= {{value: 'S',label:"S"}}
            onChange={(value) => this.setState({ size: value.value })}
          ></Select>
          <button
            onClick={this.handelClick}
            className="btn btn-primary position-relative add-button"
          >
            Add to Cart
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {this.formatCount()}
            </span>
          </button>
        </div>
      </div>
    );
  }
  handleSelect = (event) => {
    console.log(event.target.innerHTML, this);
  };
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  handelClick = () => {
    // console.log("Inc Clicked", this);
    console.log(this.state.size, this);
    this.setState({ count: this.state.count + 1 });
  };
}

export default Items;
