import React from "react";
import "../assets/css/Navbar.css"

export default function Modal() {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Categories</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <li><a href="/">Gadgets</a></li>
                        <li><a href="/">Furniture</a></li>
                        <li><a href="/">Make Up</a></li>
                        <li><a href="/">Sneakers</a></li>
                        <li><a href="/">Tools</a></li>
                        <li><a href="/">Baby</a></li>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}