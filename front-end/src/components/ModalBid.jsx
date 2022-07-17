import React, { useState } from "react";
import axios from "axios";

export default function Bid(props) {
  const [harga, setHarga] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      productId: props.data.id,
      harga,
    };
    try {
      await axios.post("https://secondhand-backend-mac.herokuapp.com/bid", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    location.reload();
  };

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                <img src={props.data.ProductImages[0].image} alt="Gambar" />
              </div>
              <div className="product-details">
                <h5>{props.data.nama}</h5>
                <p>Rp. {props.data.harga}</p>
              </div>
            </div>
            <div className="product-focus-bid">
              <h5>Harga Tawar</h5>
              <form onSubmit={handleSubmit}>
                <input className="input-bid" onChange={(e) => setHarga(e.target.value)} type="text" placeholder="Rp 0,00" />
                <div className="text-center mt-4">
                  {loading ? (
                    <button disabled type="submit" className="bid btn btn-success">
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Bidding...
                    </button>
                  ) : (
                    <button type="submit" className="bid btn btn-success">
                      Bid
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
