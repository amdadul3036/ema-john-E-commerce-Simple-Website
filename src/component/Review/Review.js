import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Review = () => {


    const [cart,setCart] = useState([])
    useEffect(()=> {
// Cart 
     const savedCart = getDatabaseCart();
     const productKeys = Object.keys(savedCart);
     const cartProducts = productKeys.map( key  => {
         const product = fakeData.find( pd => pd.key === key);
         product.quantity = savedCart[key];
         return product;
     },[])
     setCart(cartProducts);
    })
    return (
        <div>
            <h1>Cart Items: {cart.length}</h1>

        </div>
    );
};

export default Review;