import React from "react";

function ProductModal({ product, onClose, onBuy }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="close-modal">&times;</button>
        <h2>{product.name}</h2>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Rating:</strong> {product.rating} ({product.reviews})</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p>{product.description}</p>
        <ul>
          {product.specs.map((spec, i) => <li key={i}>{spec}</li>)}
        </ul>
        <button onClick={() => onBuy(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductModal;