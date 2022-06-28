import React from "react";
import Banner from "../assets/images/Banner.png";
import Jordan from "../assets/images/AirJordan.jpg";
import CatBaby from "../assets/images/CatBaby.png";
import CatGadgets from "../assets/images/CatGadgets.png";
import CatFurniture from "../assets/images/CatFurniture.png";
import CatSneakers from "../assets/images/CatSneakers.png";
import CatMakeUp from "../assets/images/CatMakeUp.png";
import CatTools from "../assets/images/CatTools.png";

import Card from "../components/Card";

import "../assets/css/Home.css";
import "../assets/css/Card.css";
import "../assets/css/Navbar.css";

// Dummy Product Images
import NewProducts from "../assets/images/NewProducts.jpg";
import NewProducts2 from "../assets/images/NewProducts2.jpg";
import NewProducts3 from "../assets/images/NewProducts3.jpg";
import LayoutNavbarFooter from "../components/LayoutNavbarFooter";

export default function Home() {
    return (
        <LayoutNavbarFooter>
            <div className="container container-fluid">

                {/* Carousel */}
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={Jordan} className="d-block w-100 imgCarousel" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={Banner} className="d-block w-100 imgCarousel" alt="img" />
                        </div>
                        <div className="carousel-item">
                            <img src={Banner} className="d-block w-100 imgCarousel" alt="img" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Card */}
                <div className="d-flex flex-row flex-wrap justify-content-start mt-5 mb-2">
                    <h4>Trend Categories</h4>
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-around">
                    <button className="buttonCategories">
                        <div className="cardStyle">
                            <img src={CatGadgets} className="card-img-top" alt="..." />
                        </div>
                    </button>
                    <button className="buttonCategories">
                        <div className="cardStyle">
                            <img src={CatFurniture} className="card-img-top" alt="..." />
                        </div>
                    </button>
                    <button className="buttonCategories">
                        <div className="cardStyle">
                            <img src={CatMakeUp} className="card-img-top" alt="..." />
                        </div>
                    </button>
                    <button className="buttonCategories">
                        <div className="cardStyle">
                            <img src={CatSneakers} className="card-img-top" alt="..." />
                        </div>
                    </button>
                    <button className="buttonCategories">
                        <div className="cardStyle">
                            <img src={CatTools} className="card-img-top" alt="..." />
                        </div>
                    </button>
                    <button className="buttonCategories">
                        <div className="cardStyle">
                            <img src={CatBaby} className="card-img-top" alt="..." />
                        </div>
                    </button>
                </div>

                {/* New Products */}
                <div className="home-title mt-5 mb-4">
                    <h4>New Products</h4>
                </div>
                <div className="row row-cols-2 row-cols-md-4 g-3 mt-2">
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

                </div>
            </div>
        </LayoutNavbarFooter>


    )
}