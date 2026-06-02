import React from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { incrementCart } = useCart();

  return (
    <div className="card product-showcase-card h-100 border-0 bg-transparent">
      <div className="product-img-frame shadow-sm">
        <img src={product.img} alt={product.title} />
        {product.discount && <span className="discount-tag">{product.discount}</span>}
        <div className="position-absolute bottom-0 end-0 p-2 opacity-75 hover-opacity-100">
          <button onClick={(e) => { e.preventDefault(); incrementCart(); }} className="btn btn-light btn-sm rounded-circle shadow-sm" title="Add To Bag">
            <i className="bi bi-bag-plus text-dark"></i>
          </button>
        </div>
      </div>
      <div className="pt-3 pb-1">
        <span className="product-brand-title text-uppercase d-block mb-1">{product.brand}</span>
        <h6 className="product-name-heading text-truncate mb-2">{product.title}</h6>
        <div className="d-flex align-items-center gap-2">
          <span className="price-current text-dark">₹{product.price}</span>
          {product.oldPrice && <span className="price-slashed">₹{product.oldPrice}</span>}
        </div>
      </div>
    </div>
  );
}