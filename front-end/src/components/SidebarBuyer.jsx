import React, { Component } from 'react'
import Images  from '../assets/images/logo.png'
import '../assets/css/SidebarBuyer.css'
import foto from "../assets/images/logo.png";

export default function Sidebar() {
    return (
        <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-start sidebar" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header ">
                <h5 className="offcanvas-title logo" id="offcanvasNavbarLabel"><img src={Images}/></h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item link">
                    <a className="nav-link active" aria-current="page" href="/buyer">Dashboard</a>
                </li>
                <li className="nav-item link">
                    <a className="nav-link" href="/accountBuyer">My Account</a>
                </li>
                </ul>
            </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-left">My Account <br /> Update your current profile</div>
                    <div className="col-md-4 ms-auto text-right"><img src={foto} className="foto-profil"/> Hi, Angga</div>
                </div>
            </div>
        </div>
        </nav>
    )
    
}
