import React from "react";
import SidebarSeller from "../components/SidebarSeller";
import '../assets/css/TransactionSeller.css'

export default function TransactionsSeller() {
    return (
        <div className="main">
            <SidebarSeller />
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