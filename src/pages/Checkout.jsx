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
    <div className="container py-5">
      
      <h2 className="fw-bold mb-4">Checkout</h2>

      <div className="row g-4">

        {/* LEFT - FORM */}
        <div className="col-lg-7">

          <div className="border rounded p-4 shadow-sm bg-white">

            <h5 className="mb-3">Shipping Details</h5>

            <div className="row g-3">

              <div className="col-md-6">
                <input className="form-control" placeholder="Full Name" />
              </div>

              <div className="col-md-6">
                <input className="form-control" placeholder="Phone Number" />
              </div>

              <div className="col-12">
                <input className="form-control" placeholder="Address" />
              </div>

              <div className="col-md-6">
                <input className="form-control" placeholder="City" />
              </div>

              <div className="col-md-6">
                <input className="form-control" placeholder="Pincode" />
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT - SUMMARY */}
        <div className="col-lg-5">

          <div className="border rounded p-4 shadow-sm bg-light">

            <h5 className="mb-3">Order Summary</h5>

            {cartItems.length === 0 ? (
              <p className="text-muted">No items in cart</p>
            ) : (
              cartItems.map((item, i) => (
                <div key={i} className="d-flex justify-content-between mb-2">
                  <span>{item.title}</span>
                  <span>₹{item.price}</span>
                </div>
              ))
            )}

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>

            <button className="btn btn-success w-100 mt-4">
              Place Order
            </button>

            <button
              className="btn btn-outline-dark w-100 mt-2"
              onClick={() => navigate("/shop")}
            >
              Continue Shopping
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}