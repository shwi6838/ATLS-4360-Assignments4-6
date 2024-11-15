import React from 'react';
import MenuItem from './menuItem';

function MenuList({ menuItems, addToOrder, title }) {
  return (
    <div>
      <h2 id="MenuTitle">{title}</h2>
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} addToOrder={addToOrder} />
      ))}
    </div>
  );
}

export default MenuList;