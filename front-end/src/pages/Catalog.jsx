import React from 'react'

import "../assets/css/Catalog.css"
import Card from "../components/Card";
import LayoutNavbarFooter from "../components/LayoutNavbarFooter";

// Dummy Images
import NewProducts from "../assets/images/NewProducts.jpg";
import NewProducts2 from "../assets/images/NewProducts2.jpg";
import NewProducts3 from "../assets/images/NewProducts3.jpg";

export default function Catalog() {
    return (
        <LayoutNavbarFooter>
            <div className="container">

                {/* for desktop or tablet layout */}
                <div className="row catalog-horizontal">
                    <div className="col-9">
                        <h2 className="catalog-title">Catalog</h2>
                    </div>
                    <div className="col-4 pt-2">
                        <br />
                        <div className="catalog-nav">
                            <h5 className="catalog-nav-title">Categories</h5>
                            <hr />
                            <div className="catalog-nav-link">
                                <a href="/" className="catalog-link d-flex justify-content-between">
                                    All Categories<i className="bx bx-chevron-right"></i>
                                </a>
                                <ul>
                                    <a href="/" className="my-2 catalog-link d-flex justify-content-between">
                                        Gadgets<i className="bx bx-chevron-right"></i>
                                    </a>
                                    <a href="/" className="my-2 catalog-link d-flex justify-content-between">
                                        Furniture<i className="bx bx-chevron-right"></i>
                                    </a>
                                    <a href="/" className="my-2 catalog-link d-flex justify-content-between">
                                        Make Up<i className="bx bx-chevron-right"></i>
                                    </a>
                                    <a href="/" className="my-2 catalog-link d-flex justify-content-between">
                                        Sneakers<i className="bx bx-chevron-right"></i>
                                    </a>
                                    <a href="/" className="my-2 catalog-link d-flex justify-content-between">
                                        Tools<i className="bx bx-chevron-right"></i>
                                    </a>
                                    <a href="/" className="my-2 catalog-link d-flex justify-content-between">
                                        Baby<i className="bx bx-chevron-right"></i>
                                    </a>
                                </ul>
                            </div>
                            <hr />
                            <div className="catalog-nav-link">
                                <a href="/" className="catalog-link d-flex justify-content-between">
                                    Wishlist<i className="bx bx-chevron-right"></i>
                                </a>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="col-8">
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
                    <div className="col mb-4">
                        <h2 className="catalog-title">Catalog</h2>
                    </div>
                    <div className="catalog-nav">
                        <h5 className="catalog-nav-title">Categories</h5>
                        <hr />
                        <div className="catalog-nav-link">
                            <a href="/" className="catalog-link d-flex justify-content-between">
                                All Categories<i className="bx bx-chevron-right"></i>
                            </a>
                            <ul>
                                <a href="/" className="my-2 catalog-link d-flex justify-content-between">
                                    Gadgets<i className="bx bx-chevron-right"></i>
                                </a>
                                <a href="/" className="my-2 catalog-link d-flex justify-content-between">
                                    Furniture<i className="bx bx-chevron-right"></i>
                                </a>
                                <a href="/" className="my-2 catalog-link d-flex justify-content-between">
                                    Make Up<i className="bx bx-chevron-right"></i>
                                </a>
                                <a href="/" className="my-2 catalog-link d-flex justify-content-between">
                                    Sneakers<i className="bx bx-chevron-right"></i>
                                </a>
                                <a href="/" className="my-2 catalog-link d-flex justify-content-between">
                                    Tools<i className="bx bx-chevron-right"></i>
                                </a>
                                <a href="/" className="my-2 catalog-link d-flex justify-content-between">
                                    Baby<i className="bx bx-chevron-right"></i>
                                </a>
                            </ul>
                        </div>
                        <hr />
                        <div className="catalog-nav-link">
                            <a href="/" className="catalog-link d-flex justify-content-between">
                                Wishlist<i className="bx bx-chevron-right"></i>
                            </a>
                        </div>
                        <hr />
                    </div>

                    <div className="row-vertical row row-cols-2 row-cols-md-4 g-2 mt-2">
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