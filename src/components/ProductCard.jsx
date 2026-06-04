import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onImageClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="card h-100 shadow-sm border-0"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        overflow: "hidden",
      }}
    >
      {/* IMAGE -> DETAILS */}
      <Link to={`/product/${product.id}`} state={{ product }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={product.img}
            alt={product.title}
            className="card-img-top"
            style={{
              height: "300px",
              width: "100%",
              objectFit: "cover",
              cursor: "pointer",
              transition: "transform 0.4s ease",
              transform: hover ? "scale(1.05)" : "scale(1)",
            }}
          />

          {/* Add To Cart Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onImageClick(product);
            }}
            style={{
              position: "absolute",
              left: "50%",
              bottom: "15px",
              transform: hover
                ? "translateX(-50%) translateY(0)"
                : "translateX(-50%) translateY(50px)",
              width: "85%",
              backgroundColor: "#e6007e",
              color: "#fff",
              border: "none",
              padding: "12px",
              borderRadius: "6px",
              fontWeight: "600",
              opacity: hover ? 1 : 0,
              transition: "all 0.4s ease",
              zIndex: 2,
            }}
          >
            Add To Cart
          </button>
        </div>
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
      </div>
    </div>
  );
};

export default ProductCard;