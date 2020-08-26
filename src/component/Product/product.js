import React from "react";
import "./product.css";

const Product = (props) => {
  console.log(props.product);
  return (
    <div className="Product">
      <div>
        <img src={props.product.img}></img>
      </div>
      <div>
        <h4 className="Product-Name">{props.product.name}</h4>
        <br />
        <p>
          <small>{props.product.seller}</small>
        </p>
        <p>${props.product.price}</p>
        <br />
        <p>
          <small>Only {props.product.stock} left in stock - Order soon</small>
        </p>
        <button className ="Main-button" onClick = {() => props.halndleAddProduct(props.product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
