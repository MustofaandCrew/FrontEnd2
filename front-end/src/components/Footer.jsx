import React from "react";

export default function Footer() {
  return (
    <div>
      <hr />
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between">  
          <div className="col-6">
            <h5 className="text-uppercase">About Us</h5>
            <p>
            SecondHand Merupakan tempat jual-beli barang secara online, khususnya barang bekas. Platform ini membuka dan menyediakan berbagai jenis kategori kebutuhan. User yang mendaftarkan diri pada aplikasi ini dapat berperan sebagai seller dan buyer dengan menggunakan 1 (satu) akun yang sama. Platform ini akan mempertemukan seller dan buyer untuk dapat melakukan negosiasi barang dan melakukan transaksi langsung diluar platform.
            </p>
          </div>
          <div className="col-2">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
          <h5 className="text-uppercase">Categories</h5>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="me-2">
                <ul className="list-unstyled">
                  <li>
                    <a href="/catalog?category=Electronic">Electronic</a>
                  </li>
                  <li>
                    <a href="/catalog?category=Gadgets">Gadgets</a>
                  </li>
                  <li>
                    <a href="/catalog?category=Sneakers">Sneakers</a>
                  </li>
                  <li>
                    <a href="/catalog?category=Fashion">Fashion</a>
                  </li>
                  <li>
                    <a href="/catalog?category=Tools">Tools</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-unstyled">
                  <li>
                    <a href="/catalog?category=Health%20and%20Beauty">Health & Beauty</a>
                  </li>
                  <li>
                    <a href="/catalog?category=Baby">Baby</a>
                  </li>
                  <li>
                    <a href="/catalog?category=Hobby">Hobby</a>
                  </li>
                  <li>
                    <a href="/catalog?category=Gaming">Gaming</a>
                  </li>
                  <li>
                    <a href="/catalog?category=Furniture">Furniture</a>
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
