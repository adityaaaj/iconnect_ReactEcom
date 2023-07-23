import React from 'react';
import './styles.css'; 

const ProductCard = ({ product }) => {
  

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button className="buy-button">Add to cart</button> 
    </div>
  );
};

export default ProductCard;
