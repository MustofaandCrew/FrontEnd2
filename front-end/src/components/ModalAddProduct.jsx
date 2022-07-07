import React from "react";

export default function AddProduct() {
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Create New Product</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body m-3">
                        <div className="d-flex justify-content-center">
                            <div className="me-5">
                                <h5>Product Name</h5>
                                <form action="">
                                    <input className="form-control" type="text" placeholder="Papel la casa" />
                                </form>
                            </div>
                            <div className="">
                                <h5>Price</h5>
                                <form action="">
                                    <input className="form-control" type="text" placeholder="$100" />
                                </form>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h5>Category</h5>
                            <form action="">
                                <select className="form-select" type="text" placeholder="Shipping">
                                    <option>Shipping</option>
                                    <option>Electronics</option>
                                    <option>Clothing</option>
                                </select>

                            </form>
                        </div>
                        <div className="mt-3">
                            <h5>Description</h5>
                            <form action="">
                                <textarea className="form-control" type="text" placeholder="lorem ipsum" />
                            </form>
                        </div>
                        <div className="custom-file mt-3">
                            <h5>Thumbnail</h5>
                            <input type="file" className="custom-file-input" id="customFile" />
                        </div>
                    </div>
                    <div className="text-center pb-3">
                        <button type="button" className="bid btn btn-success">Create Product</button>
                    </div>
                </div>
            </div>
        </div>
    )
}