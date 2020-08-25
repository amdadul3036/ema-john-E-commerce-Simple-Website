import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';

const shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    console.log(fakeData);
    return (
        <div>
            <h1>This is Shop</h1>
            <h3>{products.length}</h3>
            <ul>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default shop; 
// It's wrong because "shop" er s hobe capital always. Noile code kaj korbe na