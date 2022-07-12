import React from "react";

import "../assets/css/Catalog.css";
import Card from "../components/CardDashboard";
import LayoutNavbarFooter from "../components/LayoutNavbarFooter";
import AddProduct from "../components/ModalAddProduct";

// Dummy Images
import NewProducts from "../assets/images/NewProducts.jpg";
import NewProducts2 from "../assets/images/NewProducts2.jpg";
import NewProducts3 from "../assets/images/NewProducts3.jpg";

export default function MyProduct() {
  return (
    <LayoutNavbarFooter>
      <AddProduct />
      <div className="container">
        <div className="row catalog-horizontal">
          <div className="col-12">
            <h3 className="catalog-title">My Product</h3>
            <p>Manage it well and get money</p>
          </div>
          <div className="div">
            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Add New Product
            </button>
          </div>
          <div className="col-12">
            <div className="row row-cols-2 row-cols-md-4 g-4 me-2 mt-2 mb-5">
              <Card image={NewProducts} />
              <Card image={NewProducts2} />
              <Card image={NewProducts3} />
              <Card image={NewProducts} />
              <Card image={NewProducts2} />
            </div>
          </div>
        </div>
      </div>
    </LayoutNavbarFooter>
  );
}
