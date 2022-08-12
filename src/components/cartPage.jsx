import React, { Component } from "react";
import NavBar from "./navBar";
import ItemCart from "./itemCart";
import axios from "axios";
class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    axios
      .get("http://localhost:5000/dataset/")
      .then((response) => {
          this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    return (
      <div>
        <NavBar />
        {this.state.data.length > 0 ? this.state.data.map((item) => (
          <div className="container-fluid">
            <ItemCart
              key={item._id}
              id={item._id}
              itemName={item.itemName}
              description={item.description}
              price={item.price}
              image={item.image}
              size={item.size}
            ></ItemCart>
          </div>
        )) : null}
        {this.state.data.length === 0
          ?              <h4>No Items Add in cart!</h4>
          : null}
      </div>
    );
  }
}

export default CartPage;
