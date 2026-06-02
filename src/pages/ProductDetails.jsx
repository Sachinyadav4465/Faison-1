import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetails() {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  // Mock Data - Aap isko real API se fetch kar sakte hain
  const product = {
    id: 1,
    title: "Festive Collection Georgette - Red",
    brand: "GG FASHION",
    price: 1531,
    originalPrice: 2999,
    discount: "49% OFF",
    rating: 4.8,
    reviewsCount: 124,
    description: "Discover an exquisite red georgette lehenga with intricate zari embroidery and sequence work, perfect for weddings and festive occasions.",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600", // Main Image
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=200", // Thumb 1
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=200", // Thumb 2
    ]
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="container my-5 py-4">
      <div className="row">
        {/* Left Side: Product Images */}
        <div className="col-12 col-md-6 d-flex flex-column flex-md-row gap-3">
          {/* Thumbnails */}
          <div className="d-flex flex-row flex-md-column gap-2 order-2 order-md-1">
            {product.images.map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                alt="thumbnail"
                className={`img-fluid rounded border cursor-pointer ${mainImage === img ? 'border-danger' : ''}`}
                style={{ width: '80px', height: '100px', objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          {/* Main Large Image */}
          <div className="flex-grow-1 order-1 order-md-2">
            <img 
              src={mainImage} 
              alt={product.title} 
              className="img-fluid rounded shadow-sm w-100" 
              style={{ maxHeight: '600px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right Side: Product Meta Details */}
        <div className="col-12 col-md-6 mt-4 mt-md-0 ps-md-5">
          <span className="text-muted text-uppercase small fw-bold tracking-wider">{product.brand}</span>
          <h1 className="display-6 my-2 fw-normal text-dark">{product.title}</h1>
          
          {/* Rating */}
          <div className="d-flex align-items-center gap-2 my-3">
            <div className="text-warning">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </div>
            <span className="text-muted small">({product.reviewsCount} Customer Reviews)</span>
          </div>

          {/* Pricing */}
          <div className="d-flex align-items-baseline gap-3 my-4">
            <h2 className="fw-bold" style={{ color: '#E3005C' }}>₹{product.price}</h2>
            <del className="text-muted">₹{product.originalPrice}</del>
            <span className="badge bg-success">{product.discount}</span>
          </div>

          <hr className="text-muted my-4" />

          <p className="text-secondary lh-lg">{product.description}</p>

          {/* Size Selector */}
          <div className="my-4">
            <h6 className="fw-bold text-uppercase small text-secondary mb-3">Select Size</h6>
            <div className="d-flex gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className={`btn rounded-0 px-4 py-2 border ${selectedSize === size ? 'btn-dark text-white' : 'btn-light'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="my-4 d-flex align-items-center gap-3">
            <h6 className="fw-bold text-uppercase small text-secondary m-0">Quantity:</h6>
            <div className="input-group" style={{ width: '130px' }}>
              <button className="btn btn-outline-secondary rounded-0" onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}>-</button>
              <input type="text" className="form-control text-center bg-white border-secondary-subtle" value={quantity} readOnly />
              <button className="btn btn-outline-secondary rounded-0" onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex gap-3 mt-4">
            <button 
              className="btn btn-lg text-white rounded-0 px-5 flex-grow-1" 
              style={{ backgroundColor: '#E3005C' }}
            >
              ADD TO CART
            </button>
            <button className="btn btn-lg btn-outline-dark rounded-0 px-4">
              <i className="bi bi-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}