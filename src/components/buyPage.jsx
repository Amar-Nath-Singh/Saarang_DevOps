import React, { Component } from "react";
import Items from "./items";
import axios from "axios";
import NavBar from "./navBar";
import "./buyPage.css";
class BuyPage extends Component {
  state = {
    count: 0,
    items: [
      {
        name: "Striped Men Polo Neck Multicolor T-Shirt",
        price: 299,
        itemdesc: "Eyebogler",
        image:
          "https://rukminim1.flixcart.com/image/580/696/kzegk280/t-shirt/r/o/t/s-t285hs-as7whdngr-eyebogler-original-imagbfygwtubscjw.jpeg?q=50",
      },
      {
        name: "Color Block Men Hooded Neck Red, Black T-Shirt",
        price: 197,
        itemdesc: "HELMONT",
        image:
          "https://rukminim1.flixcart.com/image/880/1056/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50",
      },
      {
        name: "Color Block Men Round Neck Red T-Shirt",
        price: 105,
        itemdesc: "Eyebogler",
        image:
          "https://rukminim1.flixcart.com/image/714/857/kkfrjww0/t-shirt/t/v/v/3xl-t312-blrdwh-eyebogler-original-imafzs5kmgcytfsv.jpeg?q=50",
      },
      {
        name: "Printed Men Hooded Neck Black T-Shirt",
        price: 312,
        itemdesc: "TRIPR",
        image:
          "https://rukminim1.flixcart.com/image/714/857/kl2mljk0/t-shirt/a/3/k/4xl-tblhdfulmask-lion-tripr-original-imagy9tcx7q25wym.jpeg?q=50",
      },
      {
        name: "Solid Men Round Neck White T-Shirt",
        price: 295,
        itemdesc: "GREY BOX ",
        image:
          "https://rukminim1.flixcart.com/image/714/857/kf8kvbk0-0/t-shirt/d/t/o/l-tshrt-pln-whit-grey-box-original-imafvqr8bhrr5g6p.jpeg?q=50",
      },
      {
        name: "Solid Men Henley Neck Maroon T-Shirt",
        price: 105,
        itemdesc: "BLIVE",
        image:
          "https://rukminim1.flixcart.com/image/714/857/kf5pzm80-0/t-shirt/c/s/7/l-bmrhenful-z14-blive-original-imafvzpkw7zbtd8r.jpeg?q=50",
      },
    ],
  };
  componentDidMount(){
    axios
      .delete("http://localhost:5000/dataset/delete")
      .then((response) => console.log("Data Cleared"))
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <body>
        <NavBar />
        <div className="container">
          <div className="row align-items-start">
            {this.state.items.map((item) => (
              <div className="col">
                <Items
                  key={item.name}
                  itemName={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.itemdesc}
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
