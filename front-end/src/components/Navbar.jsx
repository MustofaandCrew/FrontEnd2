import React from "react";
import Modal from "./ModalNavbar";
import Notif from "../components/Notification";
import logo from "../assets/images/logo.svg";
import LogoSeller from "../assets/images/logo-seller.svg";

// dummy images
import pp from "../assets/images/comments-pp.png";

import "../assets/css/Navbar.css";

export default function Navbar() {
    return (
        <div className="container-nav">
            <Modal />
            <input type="checkbox" id="check" />
            <nav>
                <div className="icon"><a href="/">SecondHand</a></div>
                <ol>
                    <li><a href="/">Home</a></li>
                    <div className="dropdown">
                        <li>
                            <button className="btn-dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <a href="/">Categories <i className="bx bx-chevron-down"></i></a>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="/">Gadgets</a></li>
                                <li><a className="dropdown-item" href="/">Furniture</a></li>
                                <li><a className="dropdown-item" href="/">Make Up</a></li>
                                <li><a className="dropdown-item" href="/">Sneakers</a></li>
                                <li><a className="dropdown-item" href="/">Tools</a></li>
                                <li><a className="dropdown-item" href="/">Baby</a></li>
                            </ul>
                        </li>
                    </div>
                </ol>
                <div className="search-box">
                    <input type="search" placeholder="Search..." />
                    <span className="fa fa-search"></span>
                </div>
                <ol>
                    <li><a href="/"><span className="fa fa-shopping-basket"></span></a></li>
                    <li><a href="/"><span className="fa fa-bell"></span></a></li>
                    <li><h4>|</h4></li>
                    {/* <li><a href="/login">Sign In</a></li> */}
                    <li><a className="btn-seller" href="/"><img src={LogoSeller} alt="seller" /> Seller</a></li>
                    <li><a className="profile-info" href="/"><img className="img-fluid rounded-circle" src={pp} alt="profile" />Hi, Angga</a></li>
                </ol>
                <ol className="vertical-screen">
                    <li className="nav-span"><a href="/">Home</a></li>

                    <li className="nav-span">
                        <button type="button" className="btn-dropdown" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <p>Categories</p>
                        </button>
                    </li>

                    <li className="nav-span"><a href="/shoppingcart">Shopping Cart</a></li>
                    <li className="nav-span"><a href="/notification">Notification</a></li>
                    {/* <li className="nav-signin"><a href="/login"><span><i className="bx bx-log-in"></i> Sign In</span></a></li> */}
                    <li className="d-flex justify-content-center gap-2 nav-signin">
                        <a href="/"><span><img className="img-fluid" src={LogoSeller} alt="seller" /></span></a>
                        <a href="/"><span className="profile"><img className="img-fluid rounded-circle" src={pp} alt="profile" /></span></a>
                    </li>
                </ol>
                <label for="check" className="bar">
                    <span className="fa fa-bars" id="bars"></span>
                    <span className="fa fa-times" id="times"></span>
                </label>
            </nav>
        </div>
    )
}

