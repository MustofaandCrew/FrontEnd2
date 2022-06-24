import React from "react";


import Pic from "../assets/images/pic.png";
import LayoutNavbarFooter from "../components/LayoutNavbarFooter";


export default function Login() {
    return (
        <LayoutNavbarFooter>
            <div className="container my-5 px-5">
                <div className="row">
                    <div className="col-6 ">
                        <img src={Pic} alt="woman" className="img-fluid" />
                    </div>
                    <div className="col-6">
                        <h3>
                            Belanja kebutuhan utama,<br />
                            menjadi lebih mudah
                        </h3>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-success me-3">Sign In</button>
                            <a href="/register" className="btn btn-outline-secondary">Sign Up</a>
                        </form>
                    </div>
                </div>
            </div>
        </LayoutNavbarFooter>
    )
}