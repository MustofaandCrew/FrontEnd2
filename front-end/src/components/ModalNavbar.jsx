import React from "react";
import "../assets/css/ModalNavbar.css";

export default function Modal() {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title" id="exampleModalLabel">
              Categories
            </h2>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <li>
              <a className="a-modal" href="/">
                Electronic
              </a>
            </li>
            <li>
              <a className="a-modal" href="/">
                Gadget
              </a>
            </li>
            <li>
              <a className="a-modal" href="/">
                Furniture
              </a>
            </li>
            <li>
              <a className="a-modal" href="/">
                Fashion
              </a>
            </li>
            <li>
              <a className="a-modal" href="/">
                Sneaker
              </a>
            </li>
            <li>
              <a className="a-modal" href="/">
                Tools
              </a>
            </li>
            <li>
              <a className="a-modal" href="/">
                Baby
              </a>
            </li>
            <li>
              <a className="a-modal" href="/">
                Health & Beauty
              </a>
            </li>
            <li>
              <a className="a-modal" href="/">
                Gaming
              </a>
            </li>
            <li>
              <a className="a-modal" href="/">
                Toy & Hobby
              </a>
            </li>
            <li>
              <a className="a-modal" href="/">
                Music
              </a>
            </li>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
