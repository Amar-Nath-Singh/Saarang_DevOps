import React, { Component } from 'react';
import Login from './Login'
import BuyPage from "./components/buyPage"
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/BuyPage" element={<BuyPage />} />
          {/* <Route path="/Dashboard"></Route> */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
