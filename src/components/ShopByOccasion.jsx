import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/haldi1.jpg';

export default function ShopByOccasion() {
  return (
    <div className="my-5 pt-2">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="section-title m-0">Shop By <span>Occasion</span></h3>
        <Link to="/shop" className="text-muted text-decoration-none small fw-bold tracking-wider">VIEW ALL EVENTS</Link>
      </div>

      <div className="row g-3">
        <div className="col-md-4">
          <Link to="/occasion/wedding-edit" className="d-block h-100">
            <div className="occasion-card-container" style={{ height: '430px' }}>
              <img src={img1} alt="Wedding Edit Collection" />
              <div className="occasion-text-layer">
                <h4>The Wedding Edit</h4>
                <span>EXPLORE &rarr;</span>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="col-md-8">
          <div className="row g-3">
            <div className="col-md-7">
              <Link to="/occasion/haldi-mehendi" className="d-block">
                <div className="occasion-card-container" style={{ height: '205px' }}>
                  <img src={img1} alt="Haldi & Mehendi" />
                  <div className="occasion-text-layer"><h4>Haldi & Mehendi</h4></div>
                </div>
              </Link>
            </div>
            <div className="col-md-5">
              <Link to="/occasion/cocktail" className="d-block">
                <div className="occasion-card-container" style={{ height: '205px' }}>
                  <img src={img1} alt="Cocktail Night" />
                  <div className="occasion-text-layer"><h4>Cocktail Night</h4></div>
                </div>
              </Link>
            </div>
            <div className="col-md-5">
              <Link to="/occasion/festive-ready" className="d-block">
                <div className="occasion-card-container" style={{ height: '210px' }}>
                  <img src={img1} alt="Festive Ready" />
                  <div className="occasion-text-layer"><h4>Festive Ready</h4></div>
                </div>
              </Link>
            </div>
            <div className="col-md-7">
              <Link to="/occasion/casual-ethnic" className="d-block">
                <div className="occasion-card-container" style={{ height: '210px' }}>
                  <img src={img1} alt="Casual Ethnic" />
                  <div className="occasion-text-layer"><h4>Casual Ethnic</h4></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}