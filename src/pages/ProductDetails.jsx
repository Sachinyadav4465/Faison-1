import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = location.state?.product;

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h3>Product Not Found</h3>
        <button
          className="btn btn-dark mt-3"
          onClick={() => navigate("/shop")}
        >
          Back To Shop
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row g-5">

        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm">
            <img
              src={product.img}
              alt={product.title}
              className="img-fluid rounded"
              style={{
                width: "100%",
                height: "600px",
                objectFit: "cover"
              }}
            />
          </div>
        </div>

        <div className="col-md-6">
          <span className="badge bg-danger mb-3">
            Premium Collection
          </span>

          <h1 className="fw-bold mb-3">
            {product.title}
          </h1>

          <h5 className="text-muted mb-3">
            {product.brand}
          </h5>

          <h2 className="text-danger fw-bold mb-4">
            ₹{product.price}
          </h2>

          <p className="text-secondary">
            This premium designer outfit is crafted with
            high-quality fabric and elegant embroidery.
            Perfect for weddings, festivals, parties,
            engagements and special occasions.
          </p>

          <div className="border rounded p-3 bg-light mb-4">
            <h6>Product Highlights</h6>

            <ul className="mb-0">
              <li>Premium Quality Fabric</li>
              <li>Designer Collection</li>
              <li>Comfortable Fit</li>
              <li>Elegant Embroidery Work</li>
              <li>Festive & Wedding Wear</li>
            </ul>
          </div>

          <button
            className="btn btn-danger btn-lg w-100"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  );
}