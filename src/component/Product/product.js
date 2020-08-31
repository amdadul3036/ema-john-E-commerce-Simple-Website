import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  console.log(props.product);
  return (
    <div className="Product">
      <div>
      <img src={props.product.img} alt = 'Image of the product'></img>
      </div>
      <div>
        <h4 className="Product-Name"><Link to={"/"+props.product.key}>{props.product.name}</Link></h4>
        {/* <Link to={"/"+props.product.key}>{props.product.name}</Link> dibar karon er fole prottek product er link toiri hoy .
        {"/"+props.product.key} beboharer fole product er name er upor click korle tar key er link e jabe ja protteker jonno alada alada. */}
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
