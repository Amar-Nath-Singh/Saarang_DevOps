import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import saarang_logo from "./saarang_logo.jpg";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <img src={saarang_logo} alt = "" />
        <button
          className="login btn btn-danger"
          onClick={() => (window.location = "/BuyPage")}
        >
          login
        </button>
      </div>
    );
  }
  redirect() {
    this.navigate("/BuyPage");
  }
}

export default Login;
