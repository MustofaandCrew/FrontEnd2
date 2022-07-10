import React from "react";

export default function Bid() {
  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Masukkan Harga Tawaranmu
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
            <div className="d-flex product-focus">
              <div className="product-img">
                <img src="https://i.ebayimg.com/thumbs/images/g/rn8AAOSwIGBc1UqJ/s-l300.jpg" alt="" />
              </div>
              <div className="product-details">
                <h5>Jam Tangan Casio</h5>
                <p>Rp. 1.500.000</p>
              </div>
            </div>
            <div className="product-focus-bid">
              <h5>Harga Tawar</h5>
              <form action="">
                <input className="input-bid" type="text" placeholder="Rp 0,00" />
              </form>
            </div>
          </div>
          <div className="text-center pb-3">
            <button type="button" className="bid btn btn-success">
              Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
