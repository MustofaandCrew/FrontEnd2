import React from 'react'

import "../assets/css/Catalog.css"
import Card from "../components/Card";
import LayoutNavbarFooter from '../components/LayoutNavbarFooter';

// Dummy Images
import NewProducts from "../assets/images/NewProducts.jpg";
import NewProducts2 from "../assets/images/NewProducts2.jpg";
import NewProducts3 from "../assets/images/NewProducts3.jpg";

export default function Catalog() {
    return (
        <LayoutNavbarFooter>
            <div class="container">

                {/* for desktop or tablet layout */}
                <div class="row catalog-horizontal">
                    <div class="col-9">
                        <h2 className="catalog-title">Catalog</h2>
                    </div>
                    <div class="col-4 pt-2">
                        <br />
                        <div className="catalog-nav">
                            <h5 className="catalog-nav-title">Categories</h5>
                            <br />
                            <div className="catalog-nav-link d-flex justify-content-between">
                                <a href="/" className="catalog-link">All Categories</a>
                                <i className="bx bx-chevron-right"></i>
                            </div>
                            <hr />
                            <div className="catalog-nav-link d-flex justify-content-between">
                                <a href="/" className="catalog-link">Wishlist</a>
                                <i className="bx bx-chevron-right"></i>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div class="col-8">
                        <div className="row row-cols-2 row-cols-md-4 g-4 mt-2 mb-5">
                            <Card image={NewProducts} />
                            <Card image={NewProducts2} />
                            <Card image={NewProducts3} />
                            <Card image={NewProducts} />
                            <Card image={NewProducts2} />
                            <Card image={NewProducts3} />
                            <Card image={NewProducts} />
                            <Card image={NewProducts2} />
                            <Card image={NewProducts3} />
                            <Card image={NewProducts} />
                            <Card image={NewProducts2} />
                            <Card image={NewProducts3} />
                            <Card image={NewProducts} />
                            <Card image={NewProducts2} />
                            <Card image={NewProducts3} />
                            <Card image={NewProducts} />
                            <Card image={NewProducts2} />
                            <Card image={NewProducts3} />
                            <Card image={NewProducts} />
                            <Card image={NewProducts2} />
                            <Card image={NewProducts3} />
                            <Card image={NewProducts} />
                            <Card image={NewProducts2} />
                            <Card image={NewProducts3} />
                            <Card image={NewProducts} />
                            <Card image={NewProducts2} />
                            <Card image={NewProducts3} />
                            <Card image={NewProducts} />
                        </div>
                    </div>
                </div>

                {/* for Phone Layout */}
                <div className="catalog-vertical row row-cols-1 row-cols-md-4 g-1 mt-4">
                    <div className="catalog-nav">
                        <h5 className="catalog-nav-title">Categories</h5>
                        <br />
                        <div className="catalog-nav-link d-flex justify-content-between">
                            <a href="/" className="catalog-link">All Categories</a>
                            <i className="bx bx-chevron-right"></i>
                        </div>
                        <hr />
                        <div className="catalog-nav-link d-flex justify-content-between">
                            <a href="/" className="catalog-link">Wishlist</a>
                            <i className="bx bx-chevron-right"></i>
                        </div>
                        <hr />
                    </div>

                    <div className="row row-cols-2 row-cols-md-4 g-4 mt-2">
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                    </div>
                </div>

            </div>
        </LayoutNavbarFooter>
    )
}