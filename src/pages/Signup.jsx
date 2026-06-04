import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/haldi1.jpg"

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f8f8",
      }}
    >
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-11 col-lg-10">
          <div className="row g-0 shadow-lg signup-card">
            
            
            <div className="col-lg-5 d-none d-lg-block position-relative left-panel">
              <img
                src={img}
                alt="GG Fashion"
                className="w-100 h-100"
                style={{
                  objectFit: "cover",
                  minHeight: "700px",
                }}
              />

              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
                }}
              ></div>

              <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                <p
                  className="text-uppercase mb-2"
                  style={{
                    letterSpacing: "3px",
                    fontSize: "12px",
                  }}
                >
                  Join GG Fashion
                </p>

                <h1 className="fw-bold">Create Account</h1>

                <p className="mt-3">
                  Premium Ethnic Wear Collection
                </p>
              </div>
            </div>

          
            <div className="col-lg-7 col-12 right-panel">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  minHeight: "700px",
                }}
              >
                <div
                  className="w-100 px-4 px-md-5"
                  style={{
                    maxWidth: "500px",
                  }}
                >
                  <div className="text-center mb-5">
                    <h2
                      className="fw-bold"
                      style={{
                        color: "#E3005C",
                      }}
                    >
                      Create Account
                    </h2>

                    <p className="text-muted">
                      Join us to experience heritage crafted fashion
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Full Name
                      </label>

                      <input
                        type="text"
                        className="form-control py-3"
                        placeholder="Enter Full Name"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control py-3"
                        placeholder="Enter Email"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Password
                      </label>

                      <input
                        type="password"
                        className="form-control py-3"
                        placeholder="Create Password"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            password: e.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <div className="form-check mb-4">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="terms"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            terms: e.target.checked,
                          })
                        }
                        required
                      />

                      <label
                        htmlFor="terms"
                        className="form-check-label"
                      >
                        I agree to Terms & Privacy Policy
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn w-100 py-3"
                      style={{
                        backgroundColor: "#E3005C",
                        color: "#fff",
                        fontWeight: "600",
                        border: "none",
                      }}
                    >
                      CREATE ACCOUNT
                    </button>
                  </form>

                  <div className="text-center mt-4">
                    <span className="text-muted">
                      Already have an account?
                    </span>

                    <Link
                      to="/login"
                      className="ms-2 fw-bold text-decoration-none"
                      style={{
                        color: "#E3005C",
                      }}
                    >
                      Login Here
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}