import React from 'react';

function OrderSummary({ order, total, updateQuantity, clearOrder }) {
  return (
    <div id="OrderContainer">
      <h2>Order Summary</h2>
      {order.length === 0 ? (
        <p>Your order is empty. Add items to your order!</p>
      ) : (
        <div>
          <ul>
            {order.map((item, index) => (
              <li key={index}>
                {item.name} x {item.quantity} - ${item.price * item.quantity}
                <div>
                  <button id="Add" onClick={() => updateQuantity(item, 1)}>+</button>
                  <button id="Subtract" onClick={() => updateQuantity(item, -1)}>-</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <h3>Total Bill with Tax: ${(total*1.08).toFixed(2)}</h3>
          <button id="clear_button" onClick={clearOrder}>Clear Order</button>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
