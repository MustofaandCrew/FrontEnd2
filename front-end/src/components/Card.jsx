import React from "react";
import "../assets/css/Card.css";

export default function Card(props) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.image} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title thumbnail-text">Apple Watch 4</h5>
          <p className="card-text price-text">$8904</p>
        </div>
      </div>
    </div>
  );
}
