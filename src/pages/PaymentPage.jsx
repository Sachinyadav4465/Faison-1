import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function PaymentPage() {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * (item.qty || 1),
    0
  );

  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const handlePayment = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert(`Payment Successful! Amount Paid: ₹${total}`);
  };

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(to bottom,#ffffff,#fff5fa)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Left Side - Payment Methods */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <h3
                  className="fw-bold mb-4"
                  style={{ color: "#E3005C" }}
                >
                  Select Payment Method
                </h3>

                <div className="form-check border rounded-3 p-3 mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                  />
                  <label className="form-check-label ms-2">
                    UPI (PhonePe / Google Pay / Paytm)
                  </label>
                </div>

                <div className="form-check border rounded-3 p-3 mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                  />
                  <label className="form-check-label ms-2">
                    Credit / Debit Card
                  </label>
                </div>

                <div className="form-check border rounded-3 p-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <label className="form-check-label ms-2">
                    Cash On Delivery
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <h3
                  className="fw-bold mb-4"
                  style={{ color: "#E3005C" }}
                >
                  Order Summary
                </h3>

                {cartItems.length === 0 ? (
                  <p className="text-muted">No items in cart</p>
                ) : (
                  cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="d-flex justify-content-between align-items-center mb-3"
                    >
                      <div>
                        <h6 className="mb-1">
                          {item.title || item.name}
                        </h6>
                        <small className="text-muted">
                          Qty: {item.qty || 1}
                        </small>
                      </div>

                      <strong>
                        ₹
                        {Number(item.price) *
                          Number(item.qty || 1)}
                      </strong>
                    </div>
                  ))
                )}

                <hr />

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <strong>₹{subtotal}</strong>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <strong>
                    {shipping === 0 ? "FREE" : `₹${shipping}`}
                  </strong>
                </div>

                <hr />

                <div
                  className="d-flex justify-content-between fw-bold fs-5"
                  style={{ color: "#E3005C" }}
                >
                  <span>Total Amount</span>
                  <span>₹{total}</span>
                </div>

                <button
                  className="btn w-100 mt-4"
                  style={{
                    backgroundColor: "#E3005C",
                    color: "#fff",
                    padding: "12px",
                    fontWeight: "600",
                  }}
                  onClick={handlePayment}
                >
                  Pay ₹{total}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}