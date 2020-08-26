import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './shop.css'
import Product from '../Product/product';
import Cart from '../Cart/cart';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    const [cart, setCart] = useState([])

    const halndleAddProduct = (product) => {
        console.log('Product Added', product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product1 => <Product halndleAddProduct = {halndleAddProduct} product  ={product1}></Product>)
                }
         </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop; 
