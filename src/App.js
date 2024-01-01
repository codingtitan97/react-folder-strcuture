import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <Router>
      <CartProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
