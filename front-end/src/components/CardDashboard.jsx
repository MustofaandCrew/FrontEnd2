import React from "react";
import "../assets/css/Card.css";

export default function Card(props) {
  return (
    <div className="col">
      <div className="card h-1000">
        <img src={props.image} className="card-img-top p-2" alt="img" />
        <div className="card-body">
          <h5 className="card-title thumbnail-text">Apple Watch 4</h5>
          <p className="card-text price-text">$8904</p>
          <div className="row g-4">
            <div className="col-lg-6">
              <button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Edit
              </button>
            </div>
            <div className="col-lg-6">
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
