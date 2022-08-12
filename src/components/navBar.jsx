import React, { Component } from "react";
import logo from "./saarang_logo.jpg";
import { ReactComponent as Cart } from "./cart.svg";
import axios from "axios";
class NavBar extends Component {
  state = { count: 0 };
  render() {
    axios
      .get("http://localhost:5000/dataset/")
      .then((response) => {
        this.setState({ count: response.data.length });
      })
      .catch((error) => {
        console.log(error);
      });
    return (
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand text-secondary" href="/BuyPage">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Saarang
        </a>
        <div className="cartContainer">
          <button
            onClick={() => (window.location = "/cartPage")}
            className="btn btn-primary"
          >
            <Cart className="bi bi-cart" />
            Cart
            <span className="top-0 start-50 translate-middle badge rounded-pill bg-danger">
              {this.state.count > 0 ? this.state.count : 0}
            </span>
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
