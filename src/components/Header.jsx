import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from '../pages/CartDrawer'; 

export default function Header() {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const dropdownRef = useRef(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky-top bg-white shadow-sm">
      <div className="top-announcement-bar text-center py-2 text-dark">
        For styling assistance & customizations, WhatsApp us at <span className="fw-bold">+91-9270288815</span>
      </div>
      
      <nav className="navbar navbar-expand-lg navbar-light py-2 py-lg-3">
        <div className="container">
          
          <button 
            className="navbar-toggler border-0 ps-0 d-lg-none" 
            type="button" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-3 text-dark`}></i>
          </button>

          <Link to="/" className="navbar-brand fw-bold fs-3 tracking-tight m-0 me-lg-4">
            GG <span style={{ color: 'var(--primary-color)' }}>Fashion</span>
          </Link>
          
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show d-block mt-3 mt-lg-0' : ''}`} id="navbarMainLinks">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-1 gap-lg-3 fw-semibold text-uppercase small tracking-wider">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark hover-pink-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link text-dark hover-pink-link" onClick={() => setIsMobileMenuOpen(false)}>All Shop</Link>
              </li>
              
              <li className="nav-item dropdown" ref={dropdownRef}>
                <button 
                  className="nav-link dropdown-toggle text-dark bg-transparent border-0 fw-semibold text-uppercase small tracking-wider"
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  style={{ paddingTop: '8px', paddingBottom: '8px' }}
                >
                  Categories
                </button>
                <ul className={`dropdown-menu border-0 shadow-sm rounded-0 text-capitalize ${isDropdownOpen ? 'show d-block' : 'd-none'}`}>
                  <li><Link to="/occasion/sarees" className="dropdown-item py-2" onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }}>Sarees</Link></li>
                  <li><Link to="/occasion/silk-sarees" className="dropdown-item py-2" onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }}>Silk Sarees</Link></li>
                  <li><Link to="/occasion/suits" className="dropdown-item py-2" onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }}>Suits & Dresses</Link></li>
                  <li><Link to="/occasion/gowns" className="dropdown-item py-2" onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }}>Gowns</Link></li>
                  <li><Link to="/occasion/kurti" className="dropdown-item py-2" onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }}>Kurti</Link></li>
                  <li><Link to="/occasion/wedding" className="dropdown-item py-2" onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }}>Wedding Collections</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/occasion/wedding" className="nav-link text-dark hover-pink-link" onClick={() => setIsMobileMenuOpen(false)}>Arrivals</Link>
              </li>
            </ul>

            <form onSubmit={handleSearchSubmit} className="mx-auto w-50 d-none d-lg-block my-2 my-lg-0 me-lg-4">
              <div className="position-relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control search-input-box py-2 ps-4 pe-5" 
                  placeholder="Search for products, brands and more..." 
                />
                <button type="submit" className="btn border-0 position-absolute end-0 top-50 translate-middle-y me-2 text-muted">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="d-flex gap-3 gap-md-4 align-items-center fs-5 text-dark ms-auto ms-lg-0">
            <Link to="/shop" className="text-dark d-lg-none">
              <i className="bi bi-search pointer"></i>
            </Link>
            
          
            
            <Link to="/login" className="text-dark">
              <i className="bi bi-person pointer"></i>
            </Link>
            
            
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="text-dark position-relative pointer d-inline-block bg-transparent border-0 p-0 fs-5"
            >
              <i className="bi bi-bag"></i>
              {cartCount > 0 && (
                <span 
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                  style={{ fontSize: '0.55rem', padding: '4px 6px' }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </nav>


      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}