import React, { useState } from "react";
import Modal from "./ModalNavbar";
import Notif from "../components/Notification";
import logo from "../assets/images/logo.png";
import LogoSeller from "../assets/images/logo-seller.svg";
import { MdNotificationsActive } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import "../assets/css/Navbar.css";

export default function Navbar(props) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    props.onLogout();
  };

  const handleDashboard = () => {
    navigate("/dashboardbuyer");
  };

  const handleWishlist = () => {
    navigate("/wishlist");
  };

  const handleSubmit = (e) => {
    navigate(`/catalog?search=${search}`);
  };

  return (
    <div className="container-nav">
      <Modal data={props.categories} />
      <input type="checkbox" id="check" />
      <nav>
        <div className="icon">
          <a href="/">
            <img src={logo} alt="logo" /> SecondHand
          </a>
        </div>
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          <div className="dropdown">
            <li>
              <button className="btn-dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <a href="/">
                  Categories <i className="bx bx-chevron-down"></i>
                </a>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {props.categories.map((item) => (
                  <li key={item.id}>
                    <a className="dropdown-item" href={`/catalog?category=${item.nama}`}>
                      {item.nama}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </div>
        </ol>
        <form onSubmit={handleSubmit}>
          <div className="search-box">
            <input type="search" name="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
            <a href={`/catalog?search=${search}`}>
              <span className="fa fa-search"></span>
            </a>
          </div>
        </form>
        <ol>
          <li>
            <a href="/shoppingcart">
              <span className="fa fa-shopping-basket"></span>
            </a>
          </li>
          <li>
            <a href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              {props.isLoggedIn ? <>{props.notifBuyer ? <MdNotificationsActive size={`1.2em`} /> : <span className="fa fa-bell"></span>}</> : <span className="fa fa-bell"></span>}
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {props.isLoggedIn && <Notif data={props.notifBuyer} />}
            </ul>
          </li>
          <li>
            <h4>|</h4>
          </li>
          {props.isLoggedIn ? (
            <>
              <li>
                <a className="btn-seller" href="/dashboardseller">
                  <img src={LogoSeller} alt="seller" /> Seller
                  <span className="seller-notif"></span>
                </a>
              </li>
              <li>
                <a className="profile-info dropdown" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="img-fluid rounded-circle" src={props.image} alt="profile" />
                  Hi, {props.nama}
                  <ul className="dropdown-menu dropdown-profile" aria-labelledby="dropdownMenuLink">
                    <li>
                      <p className="dropdown-item" onClick={handleDashboard}>
                        Dashboard
                      </p>
                    </li>
                    <li>
                      <p className="dropdown-item" onClick={handleWishlist}>
                        Wishlist
                      </p>
                    </li>
                    <li>
                      <p className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </p>
                    </li>
                  </ul>
                </a>
              </li>
            </>
          ) : (
            <li>
              <a href="/login">Sign In</a>
            </li>
          )}
        </ol>
        <ol className="vertical-screen">
          <li className="nav-span">
            <a href="/">Home</a>
          </li>

          <li className="nav-span">
            <button type="button" className="btn-dropdown" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <p>Categories</p>
            </button>
          </li>

          <li className="nav-span">
            <a href="/shoppingcart">Shopping Cart</a>
          </li>
          <li className="nav-span">
            <a href="/notification">Notification</a>
          </li>
          <li className="nav-span">
            <a href="/wishlist">Wishlist</a>
          </li>
          {props.isLoggedIn ? (
            <>
              <li className="nav-span">
                <a onClick={handleLogout}>
                  <span className="fa fa-sign-out-alt"></span>
                  &nbsp; Sign Out
                </a>
              </li>
              <li className="d-flex justify-content-center gap-2 nav-signin">
                <a href="/dashboardseller" className="vertical-logo">
                  <span>
                    <img className="img-fluid" src={LogoSeller} alt="seller" />
                  </span>
                </a>
                <a href="/dashboardbuyer" className="vertical-profile">
                  <span className="profile">
                    <img className="img-fluid rounded-circle" src={props.image} alt="profile" />
                  </span>
                </a>
              </li>
            </>
          ) : (
            <li className="nav-signin">
              <a href="/login">
                <span>
                  <i className="bx bx-log-in"></i> Sign In
                </span>
              </a>
            </li>
          )}
        </ol>
        <label htmlFor="check" className="bar">
          <span className="fa fa-bars" id="bars"></span>
          <span className="fa fa-times" id="times"></span>
        </label>
      </nav>
    </div>
  );
}
