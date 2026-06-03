import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onImageClick }) => {
  return (
    <div className="card h-100 shadow-sm border-0">

      <img
        src={product.img}
        alt={product.title}
        className="card-img-top"
        style={{
          height: "300px",
          objectFit: "cover",
          cursor: "pointer"
        }}
        onClick={onImageClick}
      />

      <div className="card-body d-flex flex-column">
        <h6 className="fw-bold">{product.title}</h6>
        <p className="text-muted small">{product.brand}</p>
        <h5>₹{product.price}</h5>

        <Link
          to={`/product/${product.id}`}
          state={{ product }}
          className="btn btn-dark mt-auto w-100"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;