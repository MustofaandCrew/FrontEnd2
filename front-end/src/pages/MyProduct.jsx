import React, { useState, useEffect } from "react";
import SidebarSeller from "../components/SidebarSeller";
import SidebarSellerMobile from "../components/SidebarSellerMobile";
import axios from "axios";
import "../assets/css/Catalog.css";
import Card from "../components/CardDashboard";
import AddProduct from "../components/ModalAddProduct";
import PropagateLoader from "react-spinners/PropagateLoader";

const override = {
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
};

export default function MyProduct() {
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
      const product = await axios.get(`https://secondhand-backend-mac.herokuapp.com/myProducts`, {
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
          <div className="sidebar-desktop">
            <SidebarSeller />
          </div>
          <div className="sidebar-mobile">
            <SidebarSellerMobile image={user.image} nama={user.nama} />
          </div>
          {user && (
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
                    <a className="navbar-brand" href="#">
                      <img src={user.image} alt="profil" className="foto-profil" />
                      Hi, {user.nama}
                    </a>
                  </div>
                </div>
              </div>
              <div className="row catalog-horizontal">
                <div className="col-12">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 me-2 mt-2 mb-5">
                    {product && product.map((item) => <Card data={item} />)}
                    {/* <Card image={NewProducts} />
                    <Card image={NewProducts2} />
                    <Card image={NewProducts3} />
                    <Card image={NewProducts} />
                    <Card image={NewProducts2} /> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
