import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 border p-5 rounded shadow-sm bg-white">
          <h2 className="text-center fw-normal text-uppercase mb-2 tracking-wide">Welcome Back</h2>
          <p className="text-center text-muted small mb-4">Login to access your personalized ethnic collection</p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label small text-uppercase fw-semibold text-secondary">Email Address</label>
              <input 
                type="email" 
                className="form-control rounded-0 py-2 border-secondary-subtle" 
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <label className="form-label small text-uppercase fw-semibold text-secondary">Password</label>
                <a href="/forgot-password" className="small text-decoration-none" style={{ color: '#E3005C' }}>Forgot?</a>
              </div>
              <input 
                type="password" 
                className="form-control rounded-0 py-2 border-secondary-subtle" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <button 
              type="submit" 
              className="btn w-100 text-white rounded-0 py-2 mt-3 fw-bold text-uppercase"
              style={{ backgroundColor: '#E3005C', letterSpacing: '1px' }}
            >
              Sign In
            </button>
          </form>

          <div className="text-center mt-4">
            <span className="text-muted small">New to GG Fashion? </span>
            <Link to="/signup" className="small fw-bold text-decoration-none" style={{ color: '#E3005C' }}>Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}