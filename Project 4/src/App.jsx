import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//import MyButton from 'MyButton.jsx'
import MenuList from './menuList.jsx';
import OrderSummary from './orderSummary.jsx';

const entrees = [
  { name: 'Margherita Pizza', description: 'Classic pizza with tomatoes and mozzarella', price: 10, quantity: 0 },
  { name: 'Caesar Salad', description: 'Fresh romaine with Caesar dressing', price: 8, quantity: 0 },
  { name: 'Spaghetti Bolognese', description: 'Pasta with meat sauce', price: 12, quantity: 0 },
  { name: 'Chicken Alfredo', description: 'Pasta with chicken and alfredo sauce', price: 13, quantity: 0 }
]

const appetizers = [
  { name: 'Garlic Bread', description: 'Toasted bread with garlic', price: 4, quantity: 0 },
  { name: 'Mozzarella Sticks', description: 'Fried cheese sticks', price: 6, quantity: 0 },
  { name: 'Bruschetta', description: 'Toasted bread with tomatoes and basil', price: 5, quantity: 0 },
  { name: 'Brussels Sprouts', description: 'Roasted brussels sprouts', price: 6, quantity: 0 }
]


function App() {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  const addToOrder = (item) => {
    const existingItem = order.find(orderItem => orderItem.name === item.name);
  
    if (existingItem) {
      setOrder(order.map(orderItem =>
        orderItem.name === item.name ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      ));
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  
    setTotal(total + item.price);
  };
  
  
  const updateQuantity = (item, amount) => {
    const existingItem = order.find(orderItem => orderItem.name === item.name);
  
    if (existingItem) {
      const updatedOrder = order
        .map(orderItem =>
          orderItem.name === item.name
            ? { ...orderItem, quantity: orderItem.quantity + amount }
            : orderItem
        ).filter(orderItem => orderItem.quantity > 0); // Remove items with 0 quantity
      setOrder(updatedOrder);
      setTotal(total + item.price * amount);
    }
  };
  
  const clearOrder = () => {
    setOrder([]);
    setTotal(0);
  }

  return (
    <div>
      <h1>Restaurant Menu</h1>
      <div id="ListsContainer">
      <MenuList menuItems={appetizers} addToOrder={addToOrder} title={"Appetizers"} />
      <MenuList menuItems={entrees} addToOrder={addToOrder} title={"Entrees"} />
      </div>
      <OrderSummary order={order} total={total} updateQuantity={updateQuantity} clearOrder={clearOrder} />
    </div>
  )
}

export default App
