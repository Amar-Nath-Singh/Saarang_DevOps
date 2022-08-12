import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useLocation, useNavigate } from "react-router-dom";
import saarang_logo from "./components/saarang_logo.jpg";
class Login extends Component {
    state = {  } 
    
    render() { 
        return (
        <div className="container">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <img src = {saarang_logo} />
        <button className='login btn btn-danger' onClick={this.redirect}>login</button>
      </div>);
    }
    redirect(){
      const navigate = useNavigate();
      navigate("/BuyPage");
    }
}
 
export default Login;