import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const totalPrice = cart.reduce((total,prd) => total + prd.price , 0)
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price* product.quantity;
        debugger;
    }


    let shipping = 0;
    if( totalPrice > 35){
        shipping = 0;
    }
    if( totalPrice > 15 ){
        shipping = 4.99;
    }

    else if (totalPrice > 0){
        shipping = 12.99;
    }

    const totalPriceFixed = totalPrice.toFixed(2);
    const tax = (totalPrice / 15).toFixed(2);
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Orderd : {cart.length}</p>
            <p>Product Price : {totalPriceFixed}</p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p><small>Tax : {tax}</small></p>
            <p>Total Price : ${grandTotal}</p>

            <br/>
            {
                props.children
            }
            
        </div>
        
    );
};

export default Cart;