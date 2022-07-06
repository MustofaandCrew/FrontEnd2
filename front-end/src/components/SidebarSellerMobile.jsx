import React from "react";
import imageProfil from "../assets/images/user_pc.png";
import Logo from '../assets/images/logo.png';
import "../assets/css/SidebarSellerMobile.css";

export default function SideSellerMobile() {
    return (
        <nav class="navbar bg-light fixed-top">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><a href="/" ><img src={Logo} className="logo-sidebar-mobile" /></a>SecondHand</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item item-mobile">
                                <a class="nav-link active" aria-current="page" href="/transaksibuyer">Dashboard</a>
                            </li>
                            <li class="nav-item item-mobile">
                                <a class="nav-link active" href="/accountbuyer">My Account</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a class="navbar-brand" href="#"><img src={imageProfil} alt="profil" className="foto-profil" />Hi, Angga</a>
            </div>
        </nav>
    )
}
