import React from "react";

import LayoutNavbarFooter from "../components/LayoutNavbarFooter";

import Shoe from "../assets/images/NewProducts2.jpg";
import Doll from "../assets/images/NewProducts.jpg";
import Watch from "../assets/images/NewProducts3.jpg";


export default function Shoppingcart() {
    return (
        <LayoutNavbarFooter>
            <div className="container container-fluid mb-5">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name & Seller</th>
                            <th scope="col">Price</th>
                            <th scope="col">Menu</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><img src={Shoe} alt="shoes" width={150} /></td>
                            <td>
                                <h4>Otto</h4>
                                <p>By Andika Suka</p>
                            </td>
                            <td>
                                <h4>$29,112</h4>
                                <p>USD</p>
                            </td>
                            <td><button className="btn btn-danger">Remove</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td><img src={Doll} alt="shoes" width={150} /></td>
                            <td>
                                <h4>Otto</h4>
                                <p>By Andika Suka</p>
                            </td>
                            <td>
                                <h4>$29,112</h4>
                                <p>USD</p>
                            </td>
                            <td><button className="btn btn-danger">Remove</button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td><img src={Watch} alt="shoes" width={150} /></td>
                            <td>
                                <h4>Otto</h4>
                                <p>By Andika Suka</p>
                            </td>
                            <td>
                                <h4>$29,112</h4>
                                <p>USD</p>
                            </td>
                            <td><button className="btn btn-danger">Remove</button></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td><img src={Doll} alt="shoes" width={150} /></td>
                            <td>
                                <h4>Otto</h4>
                                <p>By Andika Suka</p>
                            </td>
                            <td>
                                <h4>$29,112</h4>
                                <p>USD</p>
                            </td>
                            <td><button className="btn btn-danger">Remove</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </LayoutNavbarFooter>
    )
}