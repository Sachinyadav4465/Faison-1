import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FaWhatsapp } from "react-icons/fa";

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Features from './components/Features';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import OccasionPage from './pages/OccasionPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CartDrawer from './pages/CartDrawer';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import ScrollToTop from './pages/ScrollToTop';
import PaymentPage from './pages/PaymentPage';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />

        <Header />

        <main style={{ minHeight: '70vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/occasion/:occasionId" element={<OccasionPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<CartDrawer />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </main>

        <Features />
        <Footer />

        {/* ✅ GLOBAL WHATSAPP BUTTON */}
        <a
          href="https://wa.me/916392377675"
          target="_blank"
          rel="noreferrer"
          className="floating-whatsapp"
        >
          <FaWhatsapp />
        </a>

      </Router>
    </CartProvider>
  );
}