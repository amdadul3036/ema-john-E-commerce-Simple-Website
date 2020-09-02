import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './shop.css'
import Product from '../Product/product';
import Cart from '../Cart/cart';
import {addToDatabaseCart} from '../../utilities/databaseManager'
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    const [cart, setCart] = useState([])

    const halndleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count =sameProduct.quantity +1 ;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey );
            newCart = [...others , sameProduct];
        }

        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        
        setCart(newCart);
        addToDatabaseCart(product.key,count);
    }
    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    products.map(product1 => <Product  showAddToCart = {true} halndleAddProduct = {halndleAddProduct} key = {product1.key} product  ={product1}></Product>)
                }
         </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop; 
