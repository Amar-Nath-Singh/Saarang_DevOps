import React from "react";
import Login from "./components/Login";
import BuyPage from "./components/buyPage";
import CartPage from "./components/cartPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/BuyPage" element={<BuyPage />} />
          <Route exact path="/cartPage" element={<CartPage />} />
          {/* <Route path="/Dashboard"></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
