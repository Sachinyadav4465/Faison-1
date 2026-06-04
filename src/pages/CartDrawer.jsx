import React from "react";
import {useCart} from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CartDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.qty,
    0
  );

  return (
    <>
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-black opacity-50"
          style={{ zIndex: 1040 }}
          onClick={onClose}
        />
      )}

      <div
        className="position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column"
        style={{
          width: "400px",
          maxWidth: "100%",
          zIndex: 1050,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
          <h5 className="m-0 fw-bold text-uppercase">
            Shopping Cart ({cartItems.length})
          </h5>

          <button
            className="btn-close shadow-none"
            onClick={onClose}
          ></button>
        </div>

        <div className="p-3 flex-grow-1 overflow-auto">
          {cartItems.length === 0 ? (
            <div className="h-100 d-flex flex-column justify-content-center align-items-center text-muted">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex gap-3 mb-4 pb-3 border-bottom"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded border"
                  style={{
                    width: "70px",
                    height: "90px",
                    objectFit: "cover",
                  }}
                />

                <div className="flex-grow-1">
                  <h6 className="small fw-semibold">
                    {item.title}
                  </h6>

                  <div className="d-flex align-items-center gap-2 mt-2">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>

                    <span className="fw-bold">
                      {item.qty}
                    </span>

                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <div className="mt-2 fw-bold">
                    ₹{Number(item.price) * item.qty}
                  </div>
                </div>

               <button
  className="btn btn-sm text-danger border-0"
  onClick={() => removeFromCart(item.id)}
>
  <FaTrash size={18} />
</button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-3 border-top bg-light">
            <div className="d-flex justify-content-between mb-3">
              <span className="fw-bold">Subtotal</span>
              <span className="fw-bold text-danger">
                ₹{subtotal}
              </span>
            </div>

            <button
              className="btn btn-danger w-100 mb-2"
               style={{ backgroundColor: "#e6007e", border: "none" }}
            >
              Proceed To Checkout
            </button>

            <button
              className="btn btn-outline-dark w-100"
               style={{ backgroundColor: "#e6007e", border: "none" }}
              onClick={() => {
                onClose();
                navigate("shop");
              }}
            >
              Continue Shopping
            </button>
          </div>                  
        )}
      </div>
    </>
  );
}