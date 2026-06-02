import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Images paths
import banner1 from '../assets/Gemini_Generated_Image_ty33vpty33vpty33.png'; 
import banner2 from '../assets/banner5.png';

export default function HeroBanner() {
  const navigate = useNavigate();
  
  const slides = [
    {
      image: banner1,
      headingLight: "Elegance",
      headingPink: "Redefined."
    },
    {
      image: banner2,
      headingLight: "Festive",
      headingPink: "Collections."
    },
    {
      image: banner1,
      headingLight: "Heritage",
      headingPink: "Crafted."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="position-relative d-flex align-items-center hero-slider-wrapper" 
      style={{ 
        // Image ko fatne se bachane ke liye background properties add ki hain
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.55) 35%, rgba(0, 0, 0, 0.2) 100%), url(${slides[currentIndex].image})`,
       backgroundSize: 'cover',        // 👉 Yeh sabse zaroori hai
  backgroundPosition: 'center',    // 👉 Center main element ko safe rakhta hai

  // Laptop ke liye height control
  height: '75vh', 
  minHeight: '500px',
        backgroundRepeat: 'no-repeat'   // 👈 Isse image repeat nahi hogi
      }}
    >
      
      {/* 👈 Left Arrow */}
      <button 
        onClick={handlePrev}
        className="position-absolute start-0 translate-middle-y rounded-circle d-flex align-items-center justify-content-center border-0 shadow-sm slider-arrow-btn ms-4"
      >
        <i className="bi bi-chevron-left text-dark fs-5"></i>
      </button>

      {/* 👉 Right Arrow */}
      <button 
        onClick={handleNext}
        className="position-absolute end-0 translate-middle-y rounded-circle d-flex align-items-center justify-content-center border-0 shadow-sm slider-arrow-btn me-4"
      >
        <i className="bi bi-chevron-right text-dark fs-5"></i>
      </button>

      {/* Main Content Layout */}
      <div className="container">
        <div className="row">
          {/* Har slide badalne par classes reset hoke animate karengi */}
          <div key={currentIndex} className="col-12 col-md-6 py-5 text-white animate-hero-text">
            <h1 className="display-4 m-0 text-white hero-heading-light">
              {slides[currentIndex].headingLight}
            </h1>
            <h1 className="display-2 text-uppercase m-0 hero-heading-pink">
              {slides[currentIndex].headingPink}
            </h1>
            <p className="w-100 w-md-75 mt-3 mb-4 text-white fw-bold hero-desc-text">
              Discover a curated collection of artisanal sarees and designer lehengas, where heritage craftsmanship meets modern silhouettes.
            </p>
            <button 
              onClick={() => navigate('/shop')} 
              className="btn btn-primary-main"
            >
              SHOP COLLECTION &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* ⚪ Dots Navigation */}
      <div className="position-absolute bottom-0 start-0 m-4 ps-4 d-flex gap-2 slider-dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-circle border-0 p-0 slider-dot`}
            style={{
              backgroundColor: currentIndex === index ? '#E3005C' : 'rgba(255, 255, 255, 0.5)'
            }}
          ></button>
        ))}
      </div>

    </div>
    
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

// Apne Navbar ke Bag/Cart icon pe button lagao:
// <button onClick={() => setIsCartOpen(true)}><i className="bi bi-bag"></i></button>

// Aur return ke end me drawer call karo:
// <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
}