import React from "react";
import SidebarBuyer from "../components/SidebarBuyer";
import SidebarBuyerMobile from "../components/SidebarBuyerMobile";
import "../assets/css/DashboardBuyer.css";
import Image from "../assets/images/NewProducts3.jpg";
import Expand from "../assets/images/btn-expand.png";
import imageProfil from "../assets/images/user_pc.png";

export default function DashboardBuyer() {
  return (
    <div className="main">
      <div className="sidebar-dekstop">
        <SidebarBuyer />
      </div>
      <div className="sidebar-mobile">
        <SidebarBuyerMobile />
      </div>
      <div className="page-transaksi-buyer">
        <div className="row mb-5 navbar-dekstop">
          <div className="col-md-6">
            <h3>Transactions</h3>
            <p>Big result start from the small one</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-end">
              <a className="navbar-brand" href="/">
                <img src={imageProfil} alt="profil" className="foto-profil" />
                Hi, Angga
              </a>
            </div>
          </div>
        </div>
        <div className="judul-buy">
          <h5 className="judul mt-3">Buy Product</h5>
          <hr className="line" />
        </div>
        <div className="list-dekstop">
          <div className="row table-transaksi d-flex align-items-center mb-3">
            <div className="col-sm-2">
              <img src={Image} className="image-product" alt="img" />
            </div>
            <div className="col-sm-3 text-product">Shirup Marzzan</div>
            <div className="col-sm-3 text-product">Angga Risky</div>
            <div className="col-sm-3 text-product">12 Januari, 2020</div>
            <div className="col-sm-1 arrow">
              <img src={Expand} className="image-expand" alt="img" />
            </div>
          </div>
          <div className="row table-transaksi d-flex align-items-center mb-3">
            <div className="col-sm-2">
              <img src={Image} className="image-product" alt="img" />
            </div>
            <div className="col-sm-3 text-product">Shirup Marzzan</div>
            <div className="col-sm-3 text-product">Angga Risky</div>
            <div className="col-sm-3 text-product">12 Januari, 2020</div>
            <div className="col-sm-1 arrow">
              <img src={Expand} className="image-expand" alt="img" />
            </div>
          </div>
        </div>
        <div className="list-mobile">
          <div className="card mb-3 rounded-4 mb-3">
            <img src={Image} className="card-img-top rounded-5 p-3" alt="img" />
            <div className="card-body">
              <h5 className="card-title">Shirup Marzzan</h5>
              <p className="card-text">Angga Risky</p>
              <p className="card-text">
                <small className="text-muted">12 Januari, 2020</small>
              </p>
            </div>
          </div>
          <div className="card mb-3 rounded-4 mb-3">
            <img src={Image} className="card-img-top rounded-5 p-3" alt="img" />
            <div className="card-body">
              <h5 className="card-title">Shirup Marzzan</h5>
              <p className="card-text">Angga Risky</p>
              <p className="card-text">
                <small className="text-muted">12 Januari, 2020</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
