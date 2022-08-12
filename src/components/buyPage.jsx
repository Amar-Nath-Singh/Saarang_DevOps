import React, { Component } from "react";
import Items from "./items";
import logo from "./saarang_logo.jpg";
import "./buyPage.css";
import { ReactComponent as Cart } from "./cart.svg";
class BuyPage extends Component {
  state = {
    count: 0,
    items: [
      {
        id: 1,
        itemname: "TSHIRT",
        image:
          "https://giftshop.iitm.ac.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/i/i/iit_madras_superstar_t_shirt_white_1.jpg",
      },
      {
        id: 2,
        itemname: "TSHIRT",
        image:
          "https://giftshop.iitm.ac.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/i/i/iit_madras_victory_polo_maroon_1.jpg",
      },
      {
        id: 3,
        itemname: "TSHIRT",
        image:
          "https://giftshop.iitm.ac.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/i/i/iit_madras_signature_t_shirt_royal_blue_1.jpg",
      },
      {
        id: 4,
        itemname: "TSHIRT",
        image:
          "https://giftshop.iitm.ac.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/i/i/iit_madras_superstar_t_shirt_white_1.jpg",
      },
      {
        id: 5,
        itemname: "TSHIRT",
        image:
          "https://giftshop.iitm.ac.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/i/i/iit_madras_victory_polo_maroon_1.jpg",
      },
      {
        id: 6,
        itemname: "TSHIRT",
        image:
          "https://giftshop.iitm.ac.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/i/i/iit_madras_signature_t_shirt_royal_blue_1.jpg",
      },
    ],
  };
  render() {
    return (
      <body>
        <nav class="navbar navbar-light bg-dark">
          <a class="navbar-brand text-secondary" href="/login">
            <img
              src={logo}
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            Saarang
          </a>
          <div className="cartContainer">
            <button onClick={this.handelClick} className="btn btn-primary">
              <Cart class="bi bi-cart" />
              Cart
              <span class="top-0 start-50 translate-middle badge rounded-pill bg-danger">
                {this.state.count}
              </span>
            </button>
          </div>
        </nav>
        <div class="container">
          <div class="row align-items-start">
            {this.state.items.map((item) => (
              <div class="col">
                <Items
                  key={item.id}
                  itemName={item.itemname}
                  image={item.image}
                ></Items>
              </div>
            ))}
          </div>
        </div>
      </body>
    );
  }
}

export default BuyPage;
