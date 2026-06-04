import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("upi");

  const handlePayment = () => {
    if (method === "cod") {
      alert("Order placed successfully (Cash on Delivery)");
      navigate("/order-success");
    } else {
      alert("Redirecting to payment gateway...");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">

      <div className="card shadow-lg w-100" style={{ maxWidth: "900px", borderRadius: "15px" }}>

        {/* Header */}
        <div className="card-header text-center bg-danger text-white py-3">
          <h3 className="mb-0">Secure Payment</h3>
          <small>Fashion Store Checkout</small>
        </div>

        <div className="card-body">
          <div className="row">

            {/* LEFT SIDE - PAYMENT METHODS */}
            <div className="col-md-6 border-end">

              <h5 className="mb-3">Select Payment Method</h5>

              <div className="form-check border rounded p-3 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  checked={method === "upi"}
                  onChange={() => setMethod("upi")}
                  id="upi"
                />
                <label className="form-check-label" htmlFor="upi">
                  UPI (GPay / PhonePe / Paytm)
                </label>
              </div>

              <div className="form-check border rounded p-3 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  checked={method === "card"}
                  onChange={() => setMethod("card")}
                  id="card"
                />
                <label className="form-check-label" htmlFor="card">
                  Debit / Credit Card
                </label>
              </div>

              <div className="form-check border rounded p-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  checked={method === "cod"}
                  onChange={() => setMethod("cod")}
                  id="cod"
                />
                <label className="form-check-label" htmlFor="cod">
                  Cash on Delivery
                </label>
              </div>

            </div>

            {/* RIGHT SIDE - SUMMARY */}
            <div className="col-md-6">

              <h5 className="mb-3">Order Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <strong>₹1999</strong>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <strong>₹99</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">
                <h6>Total</h6>
                <h6>₹2098</h6>
              </div>

              <button
                className="btn btn-danger w-100 py-2 fw-bold"
                onClick={handlePayment}
              >
                Pay & Place Order
              </button>

              <p className="text-center mt-3 text-muted small">
                🔒 100% Secure Payment
              </p>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}