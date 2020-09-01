import React from 'react';
import { useEffect,useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {


    const [cart,setCart] = useState([]);

    const removeProduct = (productKey) => {
        console.log('remove clicked');
    }
    useEffect(()=> {
          // Cart 
     const savedCart = getDatabaseCart();
     const productKeys = Object.keys(savedCart);
     const cartProducts = productKeys.map( key  => {
         const product = fakeData.find( pd => pd.key === key);
         product.quantity = savedCart[key];
         return product;
     },[]);
     setCart(cartProducts);
    },[])
    return (
        <div >
            <h1>Cart Items: {cart.length}</h1>
            {
                cart.map ( pd => <ReviewItem key = {pd.key} removeProduct = {removeProduct} product = {pd}></ReviewItem>)
            }
           
        </div>
    );
};

export default Review;