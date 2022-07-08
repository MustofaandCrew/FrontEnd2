import React from "react";

import "../assets/css/Catalog.css";
import Card from "../components/CardDashboard";
import AddProduct from "../components/ModalAddProduct";
import SidebarSeller from "../components/SidebarSeller";
import SidebarSellerMobile from "../components/SidebarSellerMobile";
import imageProfil from "../assets/images/user_pc.png";

// Dummy Images
import NewProducts from "../assets/images/NewProducts.jpg";
import NewProducts2 from "../assets/images/NewProducts2.jpg";
import NewProducts3 from "../assets/images/NewProducts3.jpg";

export default function MyProduct() {
  return (
    <div className="main">
      <div className="sidebar-dekstop">
        <SidebarSeller />
      </div>
      <div className="sidebar-mobile">
        <SidebarSellerMobile />
      </div>
      <div className="page-transaksi-buyer">
        <div className="row mb-5 navbar-dekstop">
          <div className="col-md-6">
            <h3 className="catalog-title">My Product</h3>
            <p>Manage it well and get money</p>
            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Add New Product
            </button>
            <AddProduct />
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-end">
              <a class="navbar-brand" href="#">
                <img src={imageProfil} alt="profil" className="foto-profil" />
                Hi, Angga
              </a>
            </div>
          </div>
          <div className="container">
            <div className="row catalog-horizontal">
              <div className="col-12">
                <div className="row row-cols-1 row-cols-md-3 g-4 me-2 mt-2 mb-5">
                  <Card image={NewProducts} />
                  <Card image={NewProducts2} />
                  <Card image={NewProducts3} />
                  <Card image={NewProducts} />
                  <Card image={NewProducts2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
