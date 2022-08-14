import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import saarang_logo from "./saarang_logo.jpg";
import "./Login.css"
class Login extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <center><img className = "LogoImg align-middle" src={saarang_logo} alt = "" />
        <h4> Saarang 2023</h4>
        </center>
        <button
          className="login-button btn btn-danger align-baseline"
          onClick={() => (window.location = "/BuyPage")}
        >
          Login
        </button>
      </div>
    );
  }
  redirect() {
    this.navigate("/BuyPage");
  }
}

export default Login;
