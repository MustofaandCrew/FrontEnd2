import React from "react";
import SidebarBuyer from "../components/SidebarBuyer";
import '../assets/css/TransaksiBuyer.css'

export default function TransaksiBuyer() {
    return (
        <div className="main">
            <SidebarBuyer />
            <h2>Buy Product</h2>
            <div class="container">
            <div class="row">
                <div class="col-sm-2">col-sm-8</div>
                <div class="col-sm-3">col-sm-4</div>
                <div class="col-sm-3">col-sm-4</div>
                <div class="col-sm-3">col-sm-4</div>
                <div class="col-sm-1">col-sm-4</div>
            </div>
            </div>
        </div>
    );
}
