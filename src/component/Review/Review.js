import React from 'react';
import { useEffect,useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/cart';

const Review = () => {


    const [cart,setCart] = useState([]);

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
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
        <div className = "twin-container">
            {/* <h1>Cart Items: {cart.length}</h1> */}
            <div className = "product-container">
                    {
                        cart.map ( pd => <ReviewItem key = {pd.key} removeProduct = {removeProduct} product = {pd}></ReviewItem>)
                    }
            </div>
           <div className="cart-container">
               <Cart cart = {cart}>
                   <button className = "Main-button">Place Order</button>
               </Cart>
           </div>
        </div>
    );
};

export default Review;