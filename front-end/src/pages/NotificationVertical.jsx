import React from "react";
import LayoutNavbarFooter from "../components/LayoutNavbarFooter";
import "../assets/css/Notification.css";

export default function Notification() {
  return (
    <LayoutNavbarFooter>
      <div className="container container-fluid">
        <a href="/shoppingcart">
          <div className="d-flex product">
            <div className="product-img">
              <img src="https://i.ebayimg.com/thumbs/images/g/rn8AAOSwIGBc1UqJ/s-l300.jpg" alt="" />
            </div>
            <div className="product-details">
              <h5>Jam Tangan Casio</h5>
              <p>Your Offer:</p>
              <p>Rp. 1.500.000</p>

              <h5 className="seller-agree">seller agrees to your offer</h5>
              {/* <h5 className="seller-reject">seller rejects to your offer</h5> */}
            </div>
          </div>
        </a>
        <hr />
        <a href="/shoppingcart">
          <div className="d-flex product">
            <div className="product-img">
              <img src="https://i.ebayimg.com/thumbs/images/g/rn8AAOSwIGBc1UqJ/s-l300.jpg" alt="" />
            </div>
            <div className="product-details">
              <h5>Jam Tangan Casio</h5>
              <p>Your Offer:</p>
              <p>Rp. 500.000</p>

              {/* <h5 className="seller-agree">seller agrees to your offer</h5> */}
              <h5 className="seller-reject">seller rejects to your offer</h5>
            </div>
          </div>
        </a>
      </div>
    </LayoutNavbarFooter>
  );
}
