import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/haldi1.jpg"

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here
    navigate("/");
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
          <div
            className="row g-0 overflow-hidden shadow-lg"
            style={{
              borderRadius: "20px",
              backgroundColor: "#fff",
            }}
          >
            {/* Left Image Section */}
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
                    "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.45))",
                }}
              ></div>

              <div className="position-absolute top-0 start-0 p-4 text-white">
                <h5 className="fw-light mb-0">GG Fashion</h5>
              </div>

              <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                <p
                  className="mb-2 text-uppercase"
                  style={{
                    letterSpacing: "3px",
                    fontSize: "12px",
                  }}
                >
                  Welcome To
                </p>

                <h1 className="fw-bold">GG Fashion</h1>

                <p
                  className="mt-3"
                  style={{
                    letterSpacing: "2px",
                  }}
                >
                  Premium Ethnic Collection
                </p>
              </div>

              <div className="position-absolute bottom-0 start-50 translate-middle-x text-white mb-4">
                <small
                  style={{
                    letterSpacing: "3px",
                  }}
                >
                  STYLE • TRADITION • ELEGANCE
                </small>
              </div>
            </div>

            {/* Right Form Section */}
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
                      Login
                    </h2>

                    <p className="text-muted">
                      Sign in to explore our latest ethnic fashion collection
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control py-3"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          backgroundColor: "#f8f8f8",
                          border: "1px solid #eee",
                        }}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <label className="form-label fw-semibold">
                          Password
                        </label>

                        <Link
                          to="/forgot-password"
                          className="text-decoration-none"
                          style={{
                            color: "#E3005C",
                            fontSize: "14px",
                          }}
                        >
                          Forgot Password?
                        </Link>
                      </div>

                      <input
                        type="password"
                        className="form-control py-3"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                          backgroundColor: "#f8f8f8",
                          border: "1px solid #eee",
                        }}
                        required
                      />
                    </div>

                    <div className="row mt-5">
                      <div className="col-6">
                        <button
                          type="button"
                          className="btn w-100 py-3"
                          style={{
                            backgroundColor: "#000",
                            color: "#fff",
                            borderRadius: "6px",
                            fontWeight: "600",
                          }}
                        >
                          CANCEL
                        </button>
                      </div>

                      <div className="col-6">
                        <button
                          type="submit"
                          className="btn w-100 py-3"
                          style={{
                            backgroundColor: "#E3005C",
                            color: "#fff",
                            borderRadius: "6px",
                            fontWeight: "600",
                            border: "none",
                          }}
                        >
                          SIGN IN
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="text-center mt-5">
                    <span className="text-muted">
                      Don't have an account?
                    </span>

                    <Link
                      to="/signup"
                      className="ms-2 fw-bold text-decoration-none"
                      style={{
                        color: "#E3005C",
                      }}
                    >
                      Create Account
                    </Link>
                  </div>

                  <div className="text-center mt-4">
                    <small className="text-muted">
                      © 2026 GG Fashion • Premium Ethnic Wear
                    </small>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right Section */}
          </div>
        </div>
      </div>
    </div>
  );
}