import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name, quantity , key } = props.product;
    const reviewItemStyle = {
        borderBottom:'1px solid red', 
        marginBottom: '5px', 
        paddingBottom:'5px', 
        marginLeft:'10px'
    }
    return (
        <div style = {reviewItemStyle }>
            <h4 className = "product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <br/>
            <button className = "Main-button" onClick = {() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;