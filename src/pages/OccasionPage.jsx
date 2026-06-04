import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import img1 from '../assets/haldi1.jpg';
import img2 from '../assets/bridal lehenga.jpg';

export default function OccasionPage() {
  const { occasionId } = useParams();

  const seasonalCatalog = [
    { id: 301, title: 'Premium Heavy Wedding Lehenga', brand: 'WEDDING EDIT', price: '24,500', img: img1 },
    { id: 302, title: 'Classic Silk Border Saree', brand: 'HERITAGE LINE', price: '6,200', img: img2 },
    { id: 303, title: 'Embroidered Anarkali Suit', brand: 'FESTIVE WEAR', price: '8,750', img: img1 },
    { id: 304, title: 'Floral Print Gown', brand: 'PARTY COLLECTION', price: '12,300', img: img2 },
    { id: 305, title: 'Banarasi Silk Saree', brand: 'TRADITIONAL CHIC', price: '9,500', img: img1 },
    { id: 306, title: 'Georgette Designer Suit', brand: 'CELEBRATION SPECIALS', price: '7,800', img: img2 }
  ];

  return (
    <div className="container my-5 pt-3">
      <div className="border-bottom pb-3 mb-4">
        <h2 className="fw-bold text-dark text-uppercase m-0">
          Filtered: <span>{occasionId?.replace('-', ' ')}</span>
        </h2>
        <p className="text-muted m-0 small">Handpicked options specialized for this occasion category segment</p>
      </div>
      <div className="row g-4">
        {seasonalCatalog.map(prod => (
          <div className="col-6 col-md-3" key={prod.id}>
            <ProductCard product={prod} />
          </div>
        ))}
      </div>
    </div>
  );
}