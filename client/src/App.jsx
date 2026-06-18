import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage/HomePage';
import { CheckoutPage } from './pages/Checkout/CheckoutPage';
import { OrdersPage } from './pages/Orders/OrdersPage';
import { TrackingPage } from './pages/Tracking/TrackingPage';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  }

  return (
  <Routes>
   <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
   <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
   <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart} />} />
   <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} loadCart={loadCart} />} />
  </Routes>
  );
}

export default App
