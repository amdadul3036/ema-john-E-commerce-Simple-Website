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
        console.log('Product Added', product);
        const newCart = [...cart,product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length
        addToDatabaseCart(product.key,count);
    }
    return (
        <div className="shop-container">
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
