import React, { useState, useEffect } from "react";
import axios from "axios";
import DefaultPic from "../assets/images/user_pc.png";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import "../assets/css/SidebarSellerMobile.css";

export default function SideBuyerMobile() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") ? true : false);
  const [nama, setNama] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get("https://secondhand-backend-mac.herokuapp.com/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setNama(res.data.data.nama);
          setImage(res.data.data.image);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <a href="/">
                <img src={Logo} className="logo-sidebar-mobile" />
              </a>
              SecondHand
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item item-mobile text">
                <a className="nav-link active" aria-current="page" href="/dashboardbuyer">
                  Dashboard
                </a>
              </li>
              <li className="nav-item item-mobile text">
                <a className="nav-link active" href="/account">
                  My Account
                </a>
              </li>
              <li className="nav-item item-mobile text">
                <a className="nav-link active" onClick={handleLogout} href="/">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a className="navbar-brand" href="#">
          <img src={image || DefaultPic} alt="profil" className="foto-profil" />
          Hi, {nama.split(" ").sort((a, b) => a.length - b.length)[0]}
        </a>
      </div>
    </nav>
  );
}