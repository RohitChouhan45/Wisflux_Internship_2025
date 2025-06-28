import React from "react";

function OrderHistory({ orders, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="close-modal">&times;</button>
        <h2>Order History</h2>
        {orders.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          orders.map((order, i) => (
            <div key={i} className="order-history-item">
              <h4>Order on {order.date.toLocaleDateString()}</h4>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>{item.name} - ₹{item.price}</li>
                ))}
              </ul>
              <p>Total: ₹{order.total.toFixed(2)}</p>
              <p>Delivery in {order.deliveryTime} day(s)</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OrderHistory;