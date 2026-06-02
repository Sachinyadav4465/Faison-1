import React from 'react';
import ProductCard from '../components/ProductCard';
import img1 from '../assets/bridal lehenga.jpg';
import img2 from '../assets/1 (2).jpg';
import img3 from '../assets/2 (2).jpg';
import img4 from '../assets/3 (2).jpg';
import img5 from '../assets/4 (2).jpg';
import img6 from '../assets/5 (2).jpg';
import img7 from '../assets/download (7).jpg';

export default function Shop() {
  // Simulating large scale collection catalog array
  const fullInventory = [
    { id: 101, title: 'Chinon Silk Party Wear', brand: 'GG FASHION', price: '1,914', img: img1 },
    { id: 102, title: 'Banarasi Soft Silk Saree', brand: 'WEAVERS OF INDIA', price: '1,860', img: img2 },
    { id: 103, title: 'Festive Collection Georgette', brand: 'GG FASHION', price: '1,531', img: img3 },
    { id: 104, title: 'Vichitra Silk - Full Border', brand: 'DESIGNER LOFT', price: '4,368', img: img4 },
    { id: 201, title: 'Embellished Gown - Evening Wear', brand: 'GG FASHION', price: '5,500', img: img5 },
    { id: 202, title: 'Printed Anarkali Suit', brand: 'SUMMER EDITION', price: '2,450', img: img6 },
    { id: 203, title: 'Bridal Red Lehenga', brand: 'WEDDING COLLECTION', price: '15,999', img: img7 },
    { id: 204, title: 'Kanjivaram Silk Custom', brand: 'HERITAGE SILK', price: '8,500', img: img1 }
  ];

  return (
    <div className="container my-5 pt-3">
      <div className="border-bottom pb-3 mb-4">
        <h2 className="fw-bold text-dark m-0">The Complete <span>Catalog</span></h2>
        <p className="text-muted m-0 small">Browse our inventory matching premium aesthetic standards</p>
      </div>
      <div className="row g-4">
        {fullInventory.map(prod => (
          <div className="col-6 col-md-3" key={prod.id}>
            <ProductCard product={prod} />
          </div>
        ))}
      </div>
    </div>
  );
}