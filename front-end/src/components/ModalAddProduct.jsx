import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddProduct() {
  const [category, setCategory] = useState([]);
  const [images, setImages] = useState([]);

  const onClose = () => {
    setImages([]);
  };
  const onUploadImages = (e) => {
    let images = [];
    for (const file of e.target.files) {
      images.push(URL.createObjectURL(file));
    }
    setImages(images);
  };

  useEffect(() => {
    axios
      .get("https://secondhand-backend-mac.herokuapp.com/categories")
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Create New Product
            </h5>
            <button onClick={onClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body m-3">
            <div className="d-flex justify-content-center">
              <form action="">
                <div>
                  <h5>Product Name</h5>
                  <input className="form-control" type="text" placeholder="Papel la casa" />
                </div>
                <div>
                  <h5>Price</h5>
                  <input className="form-control" type="text" placeholder="$100" />
                </div>
                <div className="mt-3">
                  <h5>Category</h5>
                  <select className="form-select" type="text" placeholder="Shipping">
                    {category.map((item) => (
                      <option key={item.id}>{item.nama}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-3">
                  <h5>Description</h5>
                  <textarea className="form-control" type="text" placeholder="lorem ipsum" />
                </div>
                <div className="custom-file mt-3">
                  <h5>Thumbnail</h5>
                  {images && images.map((item, index) => <img key={index} src={item} className="img-thumbnail" alt="thumbnail" />)}
                  <input type="file" onChange={onUploadImages} multiple className="form-control" id="customFile" />
                </div>
                <div className="text-center mt-3">
                  <button type="button" className="bid btn btn-success">
                    Create Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
