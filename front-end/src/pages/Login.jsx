import React from "react";
import Pic from "../assets/images/pic.png";
import "../assets/css/Login.css";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="container container-login">
      <div className="row p-5 g-5">
        <div className="col-md-6 d-flex justify-content-center">
          <img src={Pic} alt="Woman" className="img-fluid" />
        </div>
        <div className="col-md-6 container-login--right">
          <h3>Belanja kebutuhan utama, menjadi lebih mudah</h3>
          <div className="row">
            <div className="col-lg-8 col-md-12 container-login--right_form">
              <form className="mt-4">
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="d-flex flex-column gap-3">
                  <button type="submit" className="flex-fill btn-login">
                    Sign In to My Account
                  </button>
                  <NavLink to="/register" className="flex-fill text-center btn-register">
                    Sign Up
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
