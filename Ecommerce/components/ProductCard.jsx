import React from "react";

function ProductCard({ product, onBuy, onShowDetails }) {
  return (
    <div className="product-card" onClick={onShowDetails}>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{"⭐".repeat(Math.round(product.rating))} ({product.reviews})</p>
      <button onClick={(e) => { e.stopPropagation(); onBuy(product); }}>Buy Now</button>
    </div>
  );
}

export default ProductCard;
