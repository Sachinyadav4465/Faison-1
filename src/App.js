import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Structural Layout Layouts
import Header from './components/Header';
import Footer from './components/Footer';
import Features from './components/Features';

// Navigable Route Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import OccasionPage from './pages/OccasionPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
//import productdetails from './pages/productdetails';
import cart from './pages/CartDrawer';
export default function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        
        <main style={{ minHeight: '70vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/occasion/:occasionId" element={<OccasionPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/product/:productId" element={<productdetails />} /> */}
            <Route path="/cart" element={<cart />} />
          </Routes>
        </main>

        <Features />
        <Footer />
      </Router>
    </CartProvider>
  );
}