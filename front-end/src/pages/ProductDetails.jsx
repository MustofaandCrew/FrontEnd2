import React, { useState, useEffect } from "react";

import LayoutNavbarFooter from "../components/LayoutNavbarFooter";
import "../assets/css/ProductDetails.css";
import ModalBid from "../components/ModalBid";

// dummy images
import comments from "../assets/images/comments-pp.png";
import dummy from "../assets/images/productdetails.jpg";
import dummy2 from "../assets/images/productdetails2.jpg";
import dummy3 from "../assets/images/productdetails3.png";

export default function ProductDetails() {
  const [wishlist, setWishlist] = useState(false);

  useEffect(() => {
    const localStorageWishlist = localStorage.getItem("wishlist");
    const wishlistData = JSON.parse(localStorageWishlist);
    const alreadyWishlist = wishlistData.find((item) => item.id == 1);
    if (alreadyWishlist) {
      setWishlist(true);
    }
  }, []);

  const onClickWishlist = () => {
    const localStorageWishlist = localStorage.getItem("wishlist");
    const wishlistData = JSON.parse(localStorageWishlist);
    const coba = {
      id: 1,
      name: "Sirup Marjan",
    };
    if (wishlistData) {
      if (wishlist == true) {
        const newWishlist = wishlistData.filter((item) => item.id !== coba.id);
        localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      } else {
        wishlistData.push(coba);
        localStorage.setItem("wishlist", JSON.stringify(wishlistData));
      }
    } else {
      localStorage.setItem("wishlist", JSON.stringify([coba]));
    }
    setWishlist(!wishlist);
  };
  return (
    <LayoutNavbarFooter>
      <ModalBid />

      <div className="container container-fluid">
        {/* Product Thumbnails */}
        <div className="row my-2">
          <div className="col">
            <img className="thumbnail" src={dummy} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <img className="thumbnail" src={dummy2} alt="" />
          </div>
          <div className="col-3">
            <img className="thumbnail" src={dummy3} alt="" />
          </div>
          <div className="col-3">
            <img className="thumbnail" src={dummy2} alt="" />
          </div>
          <div className="col-3">
            <img className="thumbnail" src={dummy3} alt="" />
          </div>
        </div>

        {/* Product Title */}
        <div className="row mt-5">
          <div className="col">
            <h1 className="product-title">Sofa Ternyaman</h1>
            <h5 className="product-price">$1,409</h5>
          </div>
          <div className="col my-3">
            <div className="text-end">
              <button type="button" className="bid btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Bid
              </button>
            </div>
            <div className="mt-4 text-end">
              {wishlist ? (
                <button type="button" onClick={onClickWishlist} className="wishlist btn btn-outline-danger">
                  <i class="bx bx-check-double"></i> Wishlist
                </button>
              ) : (
                <button type="button" onClick={onClickWishlist} className="wishlist btn btn-outline-danger">
                  <i class="bx bx-add-to-queue"></i> Wishlist
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="row mb-4">
          <div className="col-md-8">
            <p>
              The Nike Air Max 720 SE goes bigger than ever before with Nike's tallest Air unit yet for unimaginable, all-day comfort. There's super breathable fabrics on the upper, while colours add
              a modern edge.
            </p>
          </div>
          <div className="col-md-8">
            <p>
              Bring the past into the future with the Nike Air Max 2090, a bold look inspired by the DNA of the iconic Air Max 90. Brand-new Nike Air cushioning underfoot adds unparalleled comfort
              while transparent mesh and vibrantly coloured details on the upper are blended with timeless OG features for an edgy, modernised look.
            </p>
          </div>
        </div>

        {/* Comments */}
        <div className="row">
          <div className="col-md-8">
            <h2>Comments Review</h2>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-md-8">
            <div className="d-flex">
              <img className="profile img-fluid rounded-circle my-2" src={comments} alt="" />
              <div className="d-block ms-3 pt-2">
                <h5 className="pt-3">Hazza Risky</h5>
                <p className="col-sm-7">I thought it was not good for living room. I really happy to decided buy this product last week now feels like homey.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-md-8">
            <div className="d-flex">
              <img className="profile img-fluid rounded-circle my-2" src={comments} alt="" />
              <div className="d-block ms-3 pt-2">
                <h5 className="pt-3">Hazza Risky</h5>
                <p className="col-sm-7">I thought it was not good for living room. I really happy to decided buy this product last week now feels like homey.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-md-8">
            <div className="d-flex">
              <img className="profile img-fluid rounded-circle my-2" src={comments} alt="" />
              <div className="d-block ms-3 pt-2">
                <h5 className="pt-3">Hazza Risky</h5>
                <p className="col-sm-7">I thought it was not good for living room. I really happy to decided buy this product last week now feels like homey.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-md-8">
            <div className="d-flex">
              <img className="profile img-fluid rounded-circle my-2" src={comments} alt="" />
              <div className="d-block ms-3 pt-2">
                <h5 className="pt-3">Hazza Risky</h5>
                <p className="col-sm-7">I thought it was not good for living room. I really happy to decided buy this product last week now feels like homey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutNavbarFooter>
  );
}
