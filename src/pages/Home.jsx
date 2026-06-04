import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import HeroBanner from '../components/HeroBanner';
import Categories from '../components/Categories';
import ShopByOccasion from '../components/ShopByOccasion';
import ProductCard from '../components/ProductCard';
import Testimonials from '../components/Testimonials';
import Contact from "../pages/Contact"

import img1 from '../assets/bridal-2.jpg';
import img2 from '../assets/1 (2).jpg';
import img3 from '../assets/2 (2).jpg';
import img4 from '../assets/3 (2).jpg';

export default function Home() {
  const { addToCart } = useCart();

  const shortArrivals = [
    { id: 101, title: 'Chinon Silk Party Wear - Embroidered', brand: 'GG FASHION', price: '1914', oldPrice: '2400', discount: '23% OFF', img: img1 },
    { id: 102, title: 'Banarasi Soft Silk Saree - White', brand: 'WEAVERS OF INDIA', price: '1860', oldPrice: '2200', discount: '', img: img2 },
    { id: 103, title: 'Festive Collection Georgette - Red', brand: 'GG FASHION', price: '1531', oldPrice: '', discount: '', img: img3 },
    { id: 104, title: 'Vichitra Silk - Full Border Work', brand: 'DESIGNER LOFT', price: '4368', oldPrice: '5000', discount: '', img: img4 }
  ];

  return (
    <div>
      <HeroBanner />

      <div className="container">
        <Categories />
        <ShopByOccasion />

        <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
          <h3 className="section-title m-0">
            New <span>Arrivals</span>
          </h3>

          <Link
            to="/shop"
            className="text-muted text-decoration-none small fw-bold"
          >
            VIEW ALL PRODUCTS →
          </Link>
        </div>

        <div className="row g-4">
          {shortArrivals.map((prod) => (
            <div className="col-6 col-md-3" key={prod.id}>
              <ProductCard
                product={prod}
                onImageClick={() => addToCart(prod)}
              />
            </div>
          ))}
        </div>

        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}