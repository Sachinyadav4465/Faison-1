import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = location.state?.product;

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState("");

  // Set image after product loads
  useEffect(() => {
    if (product?.img) {
      setSelectedImage(product.img);
    }
  }, [product]);

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

  const productImages = product.images?.length
    ? product.images
    : [
        product.img,
        product.img,
        product.img,
        product.img,
        product.img,
         product.img,
      ];

  const handleAddToCart = () => {
    addToCart({
      ...product,
      size: selectedSize,
    });
  };

  const handleBuyNow = () => {
    addToCart({
      ...product,
      size: selectedSize,
    });

    navigate("/checkout"); 
  };

  return (
    <div className="container py-5 mt-0">
      <div className="row g-5">

        {/* LEFT SIDE */}
        <div className="col-lg-6">

          <div className="border rounded shadow-sm p-3 bg-white">
            <img
              src={selectedImage}
              alt={product.title}
              className="img-fluid rounded"
              style={{
                width: "100%",
                height: "650px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* THUMBNAILS */}
          <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setSelectedImage(img)}
                className={`rounded border ${
                  selectedImage === img
                    ? "border-dark border-3"
                    : ""
                }`}
                style={{
                  width: "80px",
                  height: "100px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-6">

          <span className="badge bg-danger mb-3">
            Premium Collection
          </span>

          <h1 className="fw-bold">{product.title}</h1>

          <h5 className="text-muted mb-3">
            {product.brand}
          </h5>

          <h2 className="text-danger fw-bold mb-4">
            ₹{product.price}
          </h2>

          <p className="text-secondary">
            Experience elegance with this premium designer
            collection. Perfect for weddings, festivals and parties.
          </p>

          {/* SIZE */}
          <div className="mt-4">
            <h6 className="fw-bold mb-3">Select Size</h6>

            <div className="d-flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`btn ${
                    selectedSize === size
                      ? "btn-dark"
                      : "btn-outline-dark"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="border rounded p-4 mt-4 bg-light">
            <h5 className="fw-bold mb-3">
              Product Highlights
            </h5>

            <ul className="mb-0">
              <li>Premium Quality Fabric</li>
              <li>Designer Collection</li>
              <li>Comfortable Fit</li>
              <li>Wedding & Party Wear</li>
              <li>Latest Fashion Trend</li>
            </ul>
          </div>

          {/* BUTTONS */}
          <div className="d-flex gap-3 mt-4">

            <button
              className="btn btn-dark flex-fill py-3 fw-bold"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>

            <button
              className="btn btn-danger flex-fill py-3 fw-bold"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

          </div>

          <button
            className="btn btn-outline-secondary w-100 mt-3"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

        </div>

      </div>
    </div>
  );
}