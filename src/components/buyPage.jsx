import React, { Component } from "react";
import Items from "./items";
import NavBar from "./navBar"
import "./buyPage.css";
class BuyPage extends Component {
  state = {
    count: 0,
    items: [
      {
        id: 1,
        
        itemname: "TSHIRT",
        price: 105,
        itemdesc : "Item description",
        image:
          "https://giftshop.iitm.ac.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/i/i/iit_madras_superstar_t_shirt_white_1.jpg",
      },
      {
        id: 2,
        
        itemname: "TSHIRT",
        price: 105,
        itemdesc : "Item description",
        image:
          "https://giftshop.iitm.ac.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/i/i/iit_madras_victory_polo_maroon_1.jpg",
      },
      {
        id: 3,
        itemname: "TSHIRT",
        price: 105,
        itemdesc : "Item description",
        image:
          "https://giftshop.iitm.ac.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/i/i/iit_madras_signature_t_shirt_royal_blue_1.jpg",
      },
      {
        id: 4,
        
        itemname: "TSHIRT",
        price: 105,
        itemdesc : "Item description",
        image:
          "https://giftshop.iitm.ac.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/i/i/iit_madras_superstar_t_shirt_white_1.jpg",
      },
      {
        id: 5,
        
        itemname: "TSHIRT",
        price: 105,
        itemdesc : "Item description",
        image:
          "https://giftshop.iitm.ac.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/i/i/iit_madras_victory_polo_maroon_1.jpg",
      },
      {
        id: 6,
        
        itemname: "TSHIRT",
        price: 105,
        itemdesc : "Item description",
        image:
          "https://giftshop.iitm.ac.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/i/i/iit_madras_signature_t_shirt_royal_blue_1.jpg",
      },
    ],
  };
  render() {
    return (
      <body>
        <NavBar />
        <div class="container">
          <div class="row align-items-start">
            {this.state.items.map((item) => (
              <div class="col">
                <Items
                  key={item.id}
                  itemName={item.itemname}
                  image={item.image}
                  price = {item.price}
                  description = {item.itemdesc}
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
