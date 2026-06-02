import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import img1 from '../assets/haldi1.jpg';

export default function OccasionPage() {
  const { occasionId } = useParams();

  // Conditional catalog sorting simulator
  const seasonalCatalog = [
    { id: 301, title: 'Premium Heavy Wedding Lehenga', brand: 'WEDDING EDIT', price: '24,500', img: img1 },
    { id: 302, title: 'Classic Silk Border Saree', brand: 'HERITAGE LINE', price: '6,200', img: img1 }
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