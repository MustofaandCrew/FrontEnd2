import React from "react";

import Pic from "../assets/images/pic.png";

export default function Register() {
    return (

        <div className="container my-5 px-5">
            <div className="row">
                <div className="col-6 ">
                    <img src={Pic} alt="cewek" className="img-fluid" />
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
                            <label className="form-label">Name</label>
                            <input type="name" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-success">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>

    )
}