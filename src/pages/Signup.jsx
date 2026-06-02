import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', terms: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 border p-5 rounded shadow-sm bg-white">
          <h2 className="text-center fw-normal text-uppercase mb-2 tracking-wide">Create Account</h2>
          <p className="text-center text-muted small mb-4">Join us to experience heritage crafted fashion</p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label small text-uppercase fw-semibold text-secondary">Full Name</label>
              <input 
                type="text" 
                className="form-control rounded-0 py-2 border-secondary-subtle" 
                placeholder="John Doe"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
            </div>

            <div className="mb-3">
              <label className="form-label small text-uppercase fw-semibold text-secondary">Email Address</label>
              <input 
                type="email" 
                className="form-control rounded-0 py-2 border-secondary-subtle" 
                placeholder="name@example.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label small text-uppercase fw-semibold text-secondary">Password</label>
              <input 
                type="password" 
                className="form-control rounded-0 py-2 border-secondary-subtle" 
                placeholder="Minimum 6 characters"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required 
              />
            </div>

            <div className="mb-3 form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="terms" 
                onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                required 
              />
              <label className="form-check-label small text-muted" htmlFor="terms">I agree to the Terms & Privacy Policy</label>
            </div>

            <button 
              type="submit" 
              className="btn w-100 text-white rounded-0 py-2 mt-2 fw-bold text-uppercase"
              style={{ backgroundColor: '#E3005C', letterSpacing: '1px' }}
            >
              Register
            </button>
          </form>

          <div className="text-center mt-4">
            <span className="text-muted small">Already have an account? </span>
            <Link to="/login" className="small fw-bold text-decoration-none" style={{ color: '#E3005C' }}>Login Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}