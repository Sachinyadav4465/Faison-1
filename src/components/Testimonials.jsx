import React from 'react';

export default function Testimonials() {
  const feedbackData = [
    { client: "Hetal Shah", locale: "India", message: "Beautiful dress, perfect size. I ordered for my sister's wedding and it arrived right on time. The fabric texture is premium." },
    { client: "Indu Valavala", locale: "India", message: "This is my second outfit design ordered from GG Fashion. Absolutely loved it. Neatly packed and color exactly as shown." },
    { client: "Rashmi", locale: "Delhi, India", message: "Beautiful heavy border design work. Customer support desk was highly responsive with dynamic size adjustments." }
  ];

  return (
    <div className="my-5 pt-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="section-title m-0">Reviews & <span>Ratings</span></h3>
        <span className="text-muted small fw-bold pointer">VIEW ALL</span>
      </div>
      
      <div className="row g-4">
        {feedbackData.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="feedback-card-node h-100 d-flex flex-column justify-content-between shadow-sm">
              <div>
                <div className="star-rating-color mb-2">★★★★★ <span className="text-dark small fw-bold ms-1">5.0</span></div>
                <p className="text-muted small mb-3 lh-sm">"{item.message}"</p>
              </div>
              <div>
                <h6 className="m-0 fw-bold text-dark small">{item.client}</h6>
                <small className="text-muted" style={{ fontSize: '0.72rem' }}>{item.locale}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}