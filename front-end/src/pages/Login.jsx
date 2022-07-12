import React, { useState } from "react";
import Pic from "../assets/images/pic.png";
import "../assets/css/Login.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const result = await fetch("https://secondhand-backend-mac.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          throw new Error(data.errors[0].message);
        }
        setError("");
        localStorage.setItem("token", data.token);
        return "Berhasil";
      })
      .catch((error) => {
        setError(error.message);
        return "Gagal";
      });
    if (result === "Berhasil") {
      navigate("/");
    }
  };

  return (
    <div className="container container-login">
      <div className="row p-5 g-5">
        <div className="col-md-6 d-flex justify-content-center">
          <img src={Pic} alt="Woman" className="img-fluid" />
        </div>
        <div className="col-md-6 container-login--right">
          <h3>Belanja kebutuhan utama, menjadi lebih mudah</h3>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="row">
            <div className="col-lg-8 col-md-12 container-login--right_form">
              <form className="mt-4" onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" required className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" required className="form-control" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="d-flex flex-column gap-3">
                  <button type="submit" className="flex-fill btn-login">
                    Sign In to My Account
                  </button>
                  <button type="submit" className="flex-fill btn-register">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
