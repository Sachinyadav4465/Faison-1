import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onImageClick }) => {
  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="card h-100 shadow-sm border-0 mt-0"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
     
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
              height: isMobile ? "220px" : "300px",
              width: "100%",
              objectFit: "cover",
              cursor: "pointer",
              transition: "transform 0.4s ease",
              transform: hover ? "scale(1.05)" : "scale(1)",
            }}
          />

       
          {!isMobile && (
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
                backgroundColor: "#E3005C",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                fontWeight: "600",
                opacity: hover ? 1 : 0,
                transition: "all 0.4s ease",
                zIndex: 2,
              }}
            >
              Add To Cart
            </button>
          )}
        </div>
      </Link>

      <div
        className="card-body d-flex flex-column"
        style={{
          minHeight: isMobile ? "170px" : "190px",
        }}
      >

        <Link
          to={`/product/${product.id}`}
          state={{ product }}
          className="text-decoration-none text-dark"
        >
          <h6
            className="fw-bold mb-1"
            style={{
              minHeight: isMobile ? "42px" : "48px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              lineHeight: "1.3",
            }}
          >
            {product.title}
          </h6>
        </Link>

        <p
          className="text-muted small mb-2"
          style={{
            minHeight: "20px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {product.brand}
        </p>

        <h5
          className="fw-bold mb-2"
          style={{
            color: "#E3005C",
            marginTop: "auto",
          }}
        >
          ₹{product.price}
        </h5>

      
        {isMobile && (
          <button
            onClick={() => onImageClick(product)}
            className="btn w-100 mt-auto"
            style={{
              backgroundColor: "#E3005C",
              color: "#fff",
              border: "none",
              padding: "8px",
              borderRadius: "8px",
              fontWeight: "500",
              minHeight: "40px",
            }}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;