import React from 'react';

function MenuItem({ item, addToOrder }) {
  return (
    <div id="menuItem">
      <h3 id="ItemName">{item.name}</h3>
      <p id="description">{item.description}</p>
      <h4 id="Price">${item.price}</h4>
      <button id="AddToOrder" onClick={() => addToOrder(item)}>Add to Order</button>
    </div>
  );
}

export default MenuItem;