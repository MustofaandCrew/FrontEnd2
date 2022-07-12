import React, { useState, useEffect } from "react";
import SidebarSeller from "../components/SidebarSeller";
import SidebarSellerMobile from "../components/SidebarSellerMobile";
import "../assets/css/DashboardSeller.css";
import Image from "../assets/images/NewProducts3.jpg";
import Expand from "../assets/images/btn-expand.png";
import PropagateLoader from "react-spinners/PropagateLoader";
import axios from "axios";

const override = {
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
};

export default function DashboardSeller() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const fetchData = async () => {
    try {
      const user = await axios.get(`https://secondhand-backend-mac.herokuapp.com/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const product = await axios.get(`https://secondhand-backend-mac.herokuapp.com/historySeller`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(user.data.data);
      setProduct(product.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <PropagateLoader cssOverride={override} size={50} color={"#FF7158"} loading={loading} />
      ) : (
        <div className="main">
          <div className="sidebar-dekstop">
            <SidebarSeller />
          </div>
          <div className="sidebar-mobile">
            <SidebarSellerMobile image={user.image} nama={user.nama} />
          </div>
          {user && (
            <div className="page-transaksi-buyer">
              <div className="row mb-5 navbar-dekstop">
                <div className="col-md-6">
                  <h3>Transactions</h3>
                  <p>Big result start from the small one</p>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center justify-content-end">
                    <a class="navbar-brand" href="#">
                      <img src={user.image} alt="profil" className="foto-profil" />
                      Hi, {user.nama}
                    </a>
                  </div>
                </div>
              </div>
              <div className="judul-buy">
                <h5 className="judul mt-3">Sell Product</h5>
                <hr className="line" />
              </div>
              <div className="list-dekstop">
                {product ? (
                  product.map((item) => (
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
                  ))
                ) : (
                  <h3 className="text-center">Anda belum pernah melakukan transaksi</h3>
                )}
              </div>
              <div className="list-mobile">
                {product ? (
                  product.map((item) => (
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
                  ))
                ) : (
                  <h3 className="text-center">Anda belum pernah melakukan transaksi</h3>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
