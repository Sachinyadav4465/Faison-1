import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white pt-5 pb-3 mt-auto border-top">
      <div className="container">
        <div className="row g-4 text-dark">
          <div className="col-md-3">
            <h6 className="fw-bold text-uppercase small mb-3">About GG Fashion</h6>
            <p className="text-muted small lh-base">Your destination for premium ethnic wear. We blend traditional craftsmanship with modern silhouettes to bring you the finest collection.</p>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold text-uppercase small mb-3">Shop Online</h6>
            <div className="d-flex flex-column gap-2 small text-muted">
              <span className="pointer">New Arrivals</span>
              <span className="pointer">Designer Sarees</span>
              <span className="pointer">Wedding Lehengas</span>
              <span className="pointer">Festive Outfits</span>
            </div>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold text-uppercase small mb-3">Customer Desk</h6>
            <div className="d-flex flex-column gap-2 small text-muted">
              <span className="pointer">Track Order</span>
              <span className="pointer">Return & Exchange</span>
              <span className="pointer">Shipping Policy</span>
              <span className="pointer">Contact Support</span>
            </div>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold text-uppercase small mb-3">Stay Connected</h6>
            <p className="text-muted small">Subscribe to get updates on seasonal catalogs.</p>
            <div className="input-group">
              <input type="text" className="form-control form-control-sm rounded-0 border-secondary" placeholder="Your Email Address" />
              <button className="btn btn-dark btn-sm rounded-0 px-3" style={{ backgroundColor: '#E3005C', borderColor: '#E3005C' }}>JOIN</button>
            </div>
          </div>
        </div>
        <hr className="my-4 text-muted" />
        <div className="text-center text-muted small" style={{ fontSize: '0.75rem' }}>
          &copy; {new Date().getFullYear()} GG Fashion — E-Commerce Experience Design. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}