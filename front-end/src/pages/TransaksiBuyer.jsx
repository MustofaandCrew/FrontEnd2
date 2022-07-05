import React from "react";
import SidebarBuyer from "../components/SidebarBuyer";
import SidebarBuyerMobile from "../components/SidebarBuyerMobile";
import '../assets/css/TransaksiBuyer.css'
import Image from '../assets/images/NewProducts3.jpg'
import Expand from '../assets/images/btn-expand.png'

export default function TransaksiBuyer() {
    return (
        <div className="main">
            <div className="sidebar-dekstop">
                <SidebarBuyer />
            </div>
            <div className="sidebar-mobile">
                <SidebarBuyerMobile />
            </div>
            <div className="page-transaksi-buyer">
                <h2 className="judul mt-3">Buy Product</h2>
                <hr />
                    <div className="row table-transaksi d-flex align-items-center">
                        <div className="col-sm-2"><img src={Image} className="image-product"/></div>
                        <div className="col-sm-3 text-product">Shirup Marzzan</div>
                        <div className="col-sm-3 text-product">Angga Risky</div>
                        <div className="col-sm-3 text-product">12 Januari, 2020</div>
                        <div className="col-sm-1 arrow"><img src={Expand} className="image-expand"/></div>
                    </div>
            </div>
        </div>
    );
}