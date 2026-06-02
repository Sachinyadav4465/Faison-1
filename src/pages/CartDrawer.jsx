import React from 'react';

export default function CartDrawer({ isOpen, onClose }) {
  // Static mock cart items
  const cartItems = [
    {
      id: 1,
      title: "Festive Collection Georgette - Red",
      price: 1531,
      size: "M",
      qty: 1,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=150"
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <>
      {/* Background Overlay Backdrop */}
      {isOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-black opacity-50" 
          style={{ zIndex: 1040 }}
          onClick={onClose}
        />
      )}

      {/* Right Side Cart Drawer Box Container */}
      <div 
        className={`position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column`}
        style={{
          width: '400px',
          maxWidth: '100%',
          zIndex: 1050,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        {/* Drawer Header */}
        <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
          <h5 className="m-0 fw-bold text-uppercase tracking-wide" style={{ fontSize: '1.1rem' }}>Shopping Cart ({cartItems.length})</h5>
          <button className="btn-close shadow-none" onClick={onClose}></button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="p-3 flex-grow-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="h-100 d-flex flex-column justify-content-center align-items-center text-muted">
              <i className="bi bi-bag-x display-4 mb-2"></i>
              <p>Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="d-flex gap-3 mb-4 pb-3 border-bottom align-items-start">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="rounded border" 
                  style={{ width: '70px', height: '90px', objectFit: 'cover' }}
                />
                <div className="flex-grow-1">
                  <h6 className="small m-0 fw-semibold text-dark lh-base">{item.title}</h6>
                  <p className="text-muted small m-0 mt-1">Size: {item.size}</p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="small text-muted">Qty: {item.qty}</span>
                    <span className="fw-bold text-dark">₹{item.price}</span>
                  </div>
                </div>
                <button className="btn btn-sm text-danger border-0 p-0 shadow-none">
                  <i className="bi bi-trash3 fs-6"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer Summary */}
        {cartItems.length > 0 && (
          <div className="p-3 border-top bg-light">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-uppercase small fw-bold text-secondary">Subtotal:</span>
              <span className="h5 m-0 fw-bold" style={{ color: '#E3005C' }}>₹{subtotal}</span>
            </div>
            <p className="text-muted small mb-3">Shipping and taxes calculated at checkout.</p>
            <button 
              className="btn w-100 text-white rounded-0 py-2.5 fw-bold text-uppercase mb-2"
              style={{ backgroundColor: '#E3005C', letterSpacing: '0.5px' }}
            >
              Proceed To Checkout
            </button>
            <button 
              className="btn w-100 btn-outline-dark rounded-0 py-2.5 small fw-bold text-uppercase"
              onClick={onClose}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}