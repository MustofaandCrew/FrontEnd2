import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mt-5">
      <hr />
      <div className="container">
        <div className="row g-3 footer-row">
          <div className="col-lg-6">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              SecondHand Merupakan tempat jual-beli barang secara online, khususnya barang bekas. Platform ini membuka dan menyediakan berbagai jenis kategori kebutuhan. User yang mendaftarkan diri
              pada aplikasi ini dapat berperan sebagai seller dan buyer dengan menggunakan 1 (satu) akun yang sama. Platform ini akan mempertemukan seller dan buyer untuk dapat melakukan negosiasi
              barang dan melakukan transaksi langsung diluar platform.
            </p>
          </div>
          <div className="col-md-2">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase">Categories</h5>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li>
                    <NavLink to="/catalog?category=Electronic">Electronic</NavLink>
                  </li>
                  <li>
                    <NavLink to="/catalog?category=Gadgets">Gadgets</NavLink>
                  </li>
                  <li>
                    <NavLink to="/catalog?category=Sneakers">Sneakers</NavLink>
                  </li>
                  <li>
                    <NavLink to="/catalog?category=Fashion">Fashion</NavLink>
                  </li>
                  <li>
                    <NavLink to="/catalog?category=Tools">Tools</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li>
                    <NavLink to="/catalog?category=Health%20and%20Beauty">Health & Beauty</NavLink>
                  </li>
                  <li>
                    <NavLink to="/catalog?category=Baby">Baby</NavLink>
                  </li>
                  <li>
                    <NavLink to="/catalog?category=Hobby">Hobby</NavLink>
                  </li>
                  <li>
                    <NavLink to="/catalog?category=Gaming">Gaming</NavLink>
                  </li>
                  <li>
                    <NavLink to="/catalog?category=Furniture">Furniture</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center">2022 Copyright Store. All Rights Reserved.</p>
    </div>
  );
}
