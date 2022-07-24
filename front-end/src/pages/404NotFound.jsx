import React from "react";
import "../assets/css/404NotFound.css";
import sad from "../assets/images/saderror.png";

export default function Error(props) {
    return (
        <div className="d-flex container container-fluid justify-content-center align-items-center flex-wrap flex-column mb-3 page-height">
            <div className="p-2 text-center">
                <img className="error-img" src={sad} alt="error"/>
            </div>
            <div className="p-2">
                <h1 className="error-msg">404 NOT FOUND</h1>
            </div>
            <div className="p-2 text-center">
                <p className="error-msg">
                    The Page you are looking for doesn't exist or an other occured.
                    <br />
                    <a href="/"> Go Back</a> or head over to <a href="https://secondhand-seven.vercel.app/"> secondhand-seven.vercel.app </a>
                    to choose a new direction
                </p>
            </div>
        </div>
    );
}
