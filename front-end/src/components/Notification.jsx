import React from "react";
import "../assets/css/Notification.css";
import { NavLink } from "react-router-dom";

export default function Notification(props) {
  return (
    <li>
      {props.data &&
        props.data.map((data) => (
          <NavLink key={data.id} className="dropdown-item" to="/dashboardbuyer">
            <div className="d-flex product">
              <div className="product-img">
                <img src={data.Product.ProductImages[0].image} alt="Gambar" />
              </div>
              <div className="product-details">
                <h5>{data.Product.nama}</h5>
                <p>Buyer Offer:</p>
                <p>Rp. {data.harga}</p>
                {data.status === "Diterima" && <h5 className="seller-agree">seller agrees to your offer</h5>}
                {data.status === "Ditolak" && <h5 className="seller-reject">seller rejects to your offer</h5>}
              </div>
            </div>
            <hr />
          </NavLink>
        ))}
    </li>
  );
}
