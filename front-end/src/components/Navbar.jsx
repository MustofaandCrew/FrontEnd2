import React from "react";
import Modal from "./ModalNavbar";
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
                    <li><a href="/login">Sign In</a></li>
                </ol>
                <ol className="vertical-screen">
                    <li className="nav-span"><a href="/"><span className="fa fa-home"> Home</span></a></li>

                    <li className="nav-span">
                        <button type="button" className="btn-dropdown" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <h6><span className="fa fa-list"> Categories</span></h6>
                        </button>
                    </li>

                    <li className="nav-span"><a href="/"><span className="fa fa-shopping-basket"> Shopping Cart</span></a></li>
                    <li className="nav-span"><a href="/"><span className="fa fa-bell"> Notification</span></a></li>
                    <li className="nav-signin"><a href="/login"><span>Sign In</span></a></li>
                </ol>
                <label for="check" className="bar">
                    <span className="fa fa-bars" id="bars"></span>
                    <span className="fa fa-times" id="times"></span>
                </label>
            </nav>
        </div>
    )
}

