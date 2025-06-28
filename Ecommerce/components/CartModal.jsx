import React from "react";

function CartModal({ cart, onClose, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="close-modal">&times;</button>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cart.map((item, i) => (
                <li key={i}>{item.name} - ₹{item.price}</li>
              ))}
            </ul>
            <h3>Total: ₹{total.toFixed(2)}</h3>
            <button onClick={onCheckout}>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;
