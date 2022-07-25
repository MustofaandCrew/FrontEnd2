import React from "react";
import renderer from "react-test-renderer";


describe("Test suits for ModalAddProduct", () => {
    it("should match with snapshot", () => {
        const tree = renderer
            .create(
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">
                                    Create New Product
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body m-3">
                                
                                <div className="d-flex justify-content-center">
                                    <form >
                                        <div>
                                            <h5>Product Name</h5>
                                            <input required className="form-control" name="nama" type="text" placeholder="Papel la casa" />
                                        </div>
                                        <div>
                                            <h5>Price</h5>
                                            <input required className="form-control" name="harga" type="text" placeholder="Rp. 100" />
                                        </div>
                                        <div className="mt-3">
                                            <h5>Category</h5>
                                        </div>
                                        <div className="mt-3">
                                            <h5>Description</h5>
                                            <textarea required className="form-control" name="deskripsi" type="text" placeholder="lorem ipsum" />
                                        </div>
                                        <div className="custom-file mt-3">
                                            <h5>
                                                Thumbnail <span className="fs-6 fw-bold">(max. 4 photos)</span>
                                            </h5>
                                            <input required type="file" name="product_images" multiple className="form-control" id="customFile" />
                                        </div>
                                        <div className="text-center mt-3">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});