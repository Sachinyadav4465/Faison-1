import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Assets path import
import img1 from '../assets/bridal lehenga.jpg';
import img2 from '../assets/1 (2).jpg';
import img3 from '../assets/2 (2).jpg';
import img4 from '../assets/3 (2).jpg';
import img5 from '../assets/4 (2).jpg';
import img6 from '../assets/5 (2).jpg';
import img7 from '../assets/download (7).jpg';

export default function Categories() {
  const navigate = useNavigate();
  const trackRef = useRef(null);
  
  const segmentItems = [
    { name: 'Sarees', path: 'sarees', img: img1 },
    { name: 'Silk Sarees', path: 'silk-sarees', img: img2 },
    { name: 'Suits & Dresses', path: 'suits', img: img3 },
    { name: 'Gowns', path: 'gowns', img: img4 },
    { name: 'Kurti', path: 'kurti', img: img5 },
    { name: 'Wedding Collections', path: 'wedding', img: img6 },
    { name: 'Sarees Premium', path: 'sarees', img: img7 },
    { name: 'Silk Exclusive', path: 'silk-sarees', img: img1 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) setVisibleItems(2);
      else if (width <= 768) setVisibleItems(3);
      else if (width <= 992) setVisibleItems(4);
      else setVisibleItems(6);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = segmentItems.length - visibleItems;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    
    return () => clearInterval(timer);
  }, [visibleItems, segmentItems.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    const maxIndex = segmentItems.length - visibleItems;
    setCurrentIndex((prev) => (prev >= maxIndex ? maxIndex : prev + 1));
  };

  const translatePercent = currentIndex * (100 / visibleItems);

  return (
    <div className="text-center my-5 pt-3 categories-carousel-container">
      
      {/* Headings */}
      <h3 className="section-title mb-1 text-uppercase">Celebrate Every Occasion In Style</h3>
      <p className="text-muted small">Shop By <span style={{ color: '#E3005C', fontWeight: 700 }}>Category</span></p>
      
      <div className="categories-slider-relative-wrapper mt-4">
        
        
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className="cat-slider-arrow arrow-left rounded-circle d-flex align-items-center justify-content-center position-absolute shadow-sm"
          title="Previous Categories"
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        {/* Masking Port Window */}
        <div className="categories-slider-window">
          <div 
            className="categories-slider-track" 
            ref={trackRef}
            style={{ transform: `translateX(-${translatePercent}%)` }}
          >
            {segmentItems.map((item, index) => (
              <div 
                key={index} 
                className="category-node-wrapper text-center pointer"
                onClick={() => navigate(`/occasion/${item.path}`)}
              >
                <div className="category-round-avatar shadow-sm">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-100 h-100 object-fit-cover" 
                  />
                </div>
                <div className="category-custom-label text-truncate">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

       
        <button 
          onClick={handleNext} 
          disabled={currentIndex >= segmentItems.length - visibleItems}
          className="cat-slider-arrow arrow-right rounded-circle d-flex align-items-center justify-content-center position-absolute shadow-sm"
          title="Next Categories"
        >
          <i className="bi bi-chevron-right"></i>
        </button>

      </div>
    </div>
  );
}  
