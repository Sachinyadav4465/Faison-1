import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems = [] } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * (item.qty || 1),
    0
  );

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #fff5fa)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <h2
          className="fw-bold mb-4 text-center"
          style={{
            color: "#E3005C",
          }}
        >
          Checkout
        </h2>

        <div className="row g-4">
          {/* LEFT - SHIPPING FORM */}
          <div className="col-lg-7">
            <div
              className="rounded-4 p-4 shadow-sm h-100"
              style={{
                background: "#fff",
                border: "1px solid #f1d4e3",
              }}
            >
              <h5
                className="mb-4 fw-bold"
                style={{
                  color: "#E3005C",
                }}
              >
                Shipping Details
              </h5>

              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Full Name"
                    style={{
                      border: "1px solid #f1d4e3",
                      padding: "12px",
                    }}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Phone Number"
                    style={{
                      border: "1px solid #f1d4e3",
                      padding: "12px",
                    }}
                  />
                </div>

                <div className="col-12">
                  <input
                    className="form-control"
                    placeholder="Address"
                    style={{
                      border: "1px solid #f1d4e3",
                      padding: "12px",
                    }}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="City"
                    style={{
                      border: "1px solid #f1d4e3",
                      padding: "12px",
                    }}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Pincode"
                    style={{
                      border: "1px solid #f1d4e3",
                      padding: "12px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - ORDER SUMMARY */}
          <div className="col-lg-5">
            <div
              className="rounded-4 p-4 shadow-sm"
              style={{
                background: "#fff",
                border: "1px solid #f1d4e3",
              }}
            >
              <h5
                className="mb-4 fw-bold"
                style={{
                  color: "#E3005C",
                }}
              >
                Order Summary
              </h5>

              {cartItems.length === 0 ? (
                <p className="text-muted">No items in cart</p>
              ) : (
                cartItems.map((item, i) => (
                  <div
                    key={i}
                    className="d-flex justify-content-between align-items-center mb-3"
                  >
                    <div>
                      <p className="mb-0 fw-semibold">
                        {item.title}
                      </p>
                      <small className="text-muted">
                        Qty: {item.qty || 1}
                      </small>
                    </div>

                    <span className="fw-bold">
                      ₹{item.price}
                    </span>
                  </div>
                ))
              )}

              <hr />

              <div
                className="d-flex justify-content-between fw-bold fs-5 mb-4"
                style={{
                  color: "#E3005C",
                }}
              >
                <span>Total</span>
                <span>₹{subtotal}</span>
              </div>

              <button
                className="btn w-100"
                style={{
                  backgroundColor: "#E3005C",
                  color: "#fff",
                  border: "none",
                  padding: "12px",
                  fontWeight: "600",
                  borderRadius: "8px",
                }}
                onClick={() => navigate("/payment")}
              >
                Place Order
              </button>

              <button
                className="btn w-100 mt-3"
                onClick={() => navigate("/shop")}
                style={{
                  backgroundColor: "#fff",
                  color: "#E3005C",
                  border: "1px solid #E3005C",
                  padding: "12px",
                  fontWeight: "600",
                  borderRadius: "8px",
                }}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}