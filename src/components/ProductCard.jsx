import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onImageClick }) => {
  return (
    <div className="card h-100 shadow-sm border-0">

      {/* IMAGE -> DETAILS */}
      <Link to={`/product/${product.id}`} state={{ product }}>
        <img
          src={product.img}
          alt={product.title}
          className="card-img-top"
          style={{
            height: "300px",
            objectFit: "cover",
            cursor: "pointer"
          }}
        />
      </Link>

      <div className="card-body d-flex flex-column">

        {/* TITLE -> DETAILS */}
        <Link
          to={`/product/${product.id}`}
          state={{ product }}
          className="text-decoration-none text-dark"
        >
          <h6 className="fw-bold">{product.title}</h6>
        </Link>

        <p className="text-muted small">{product.brand}</p>

        <h5 className="fw-bold">₹{product.price}</h5>

        {/* BUTTONS */}
        <div className="mt-auto d-flex flex-column gap-2">

          {/* Add To Cart */}
          <button
            className="btn btn-dark w-100"
            onClick={() => onImageClick(product)}
            style={{ backgroundColor: "#e6007e", border: "none" }}
          >
            Add To Cart
          </button>

         

        </div>

      </div>
    </div>
  );
};

export default ProductCard;