import React from 'react';

export default function Features() {
  const elements = [
    { token: "bi-patch-check", title: "AUTHENTIC QUALITY", desc: "Handpicked premium fabrics" },
    { token: "bi-flower1", title: "MODERN TRADITION", desc: "Designs blending heritage" },
    { token: "bi-truck", title: "EXPRESS DELIVERY", desc: "Fast tracking worldwide" },
    { token: "bi-arrow-left-right", title: "EASY RETURNS", desc: "7-day seamless policies" },
    { token: "bi-shield-lock", title: "100% SECURE CHECKOUT", desc: "Encrypted payment pipelines" }
  ];

  return (
    <div className="features-container-row py-4 mt-5">
      <div className="container">
        <div className="row text-center g-3">
          {elements.map((el, i) => (
            <div className="col-6 col-md" key={i}>
              <i className={`bi ${el.token} feature-icon-bullet mb-1 d-block`}></i>
              <h6 className="fw-bold m-0 text-dark" style={{ fontSize: '0.75rem' }}>{el.title}</h6>
              <p className="text-muted m-0 small" style={{ fontSize: '0.68rem' }}>{el.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}