import React from "react";
import SidebarBuyer from "../components/SidebarBuyer";
import SidebarBuyerMobile from "../components/SidebarBuyerMobile";
import "../assets/css/AccountBuyer.css";
import imageProfil from "../assets/images/user_pc.png";

export default function AccountBuyer() {
  return (
    <div className="main">
      <div className="sidebar-dekstop">
        <SidebarBuyer />
      </div>
      <div className="sidebar-mobile">
        <SidebarBuyerMobile />
      </div>
      <div className="page-account-buyer">
        <div className="row mb-5 navbar-dekstop">
          <div className="col-md-6">
            <h3>My Account</h3>
            <p>Update your current profile</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-end">
              <a className="navbar-brand" href="#">
                <img src={imageProfil} alt="profil" className="foto-profil" />
                Hi, Angga
              </a>
            </div>
          </div>
        </div>
        <div className="form-account">
          <form className="row g-3">
            <div className="col-md-6 row-image">
              <div className="container">
                <div className="row align-items-start">
                  <div className="col-5">
                    <img src={imageProfil} alt="Avatar" className="image-profil" />
                  </div>
                  <div className="col">
                    Edit Profile Photo <i className="fas fa-edit"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4"></div>
            <div className="col-md-6 mt-4">
              <label for="inputName" className="form-label">
                Your Name
              </label>
              <input type="text" className="form-control" id="inputName" />
            </div>
            <div className="col-md-6 mt-4">
              <label for="inputEmail" className="form-label">
                Your Email
              </label>
              <input type="email" className="form-control" id="inputEmail" />
            </div>
            <div className="col-md-6 mt-4">
              <label for="inputAddress1" className="form-label">
                Address 1
              </label>
              <input type="text" className="form-control" id="inputAddress1" placeholder="1234 Main St" />
            </div>
            <div className="col-md-6 mt-4">
              <label for="inputAddress2" className="form-label">
                Address 2
              </label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="col-md-4 mt-4">
              <label for="inputProvince" className="form-label">
                Province
              </label>
              <input type="text" className="form-control" id="inputProvince" />
            </div>
            <div className="col-md-4 mt-4">
              <label for="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4 mt-4">
              <label for="inputPostalCode" className="form-label">
                Postal Code
              </label>
              <input type="text" className="form-control" id="inputPostalCode" />
            </div>
            <div className="col-6 mt-4">
              <label for="inputCountry" className="form-label">
                Country
              </label>
              <input type="text" className="form-control" id="inputCountry" />
            </div>
            <div className="col-6 mt-4">
              <label for="inputMobile" className="form-label">
                Mobile
              </label>
              <input type="text" className="form-control" id="inputMobile" />
            </div>
            <div className="col-12 mt-5">
              <button type="submit" className="btn btn-success btn-save">
                Save Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
