import React from "react";
import imageProfil from "../assets/images/user_pc.png";
import Logo from '../assets/images/logo.png';
import "../assets/css/SidebarSellerMobile.css";

export default function SideSellerMobile() {
    return (
        <nav className="navbar bg-light fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><a href="/" ><img src={Logo} className="logo-sidebar-mobile" /></a>SecondHand</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item item-mobile text">
                                <a className="nav-link active" aria-current="page" href="/transaksibuyer">Dashboard</a>
                            </li>
                            <li className="nav-item item-mobile text">
                                <a className="nav-link active" href="/accountbuyer">My Product</a>
                            </li>
                            <li className="nav-item item-mobile text">
                                <a className="nav-link active" href="/accountbuyer">My Account</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a className="navbar-brand" href="#"><img src={imageProfil} alt="profil" className="foto-profil" />Hi, Angga</a>
            </div>
        </nav>
    )
}
