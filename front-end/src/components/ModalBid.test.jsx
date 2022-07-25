import React from "react";
import renderer from "react-test-renderer";


describe("Test suits for ModalBid", () => {
    it("should match with snapshot", () => {
        const tree = renderer
            .create(
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">
                                    Input your bid price
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Your bid will be informed to seller, if seller agreed you will be informed and can contact the seller from dashboard menu</p>
                                <div className="d-flex product-focus">
                                    <div className="product-img">
                                        <img src="https://ncrsport.com/img/storage/large/553558-125-1.jpg" alt="Gambar" />
                                    </div>
                                    <div className="product-details">
                                        <h5>Air Jordan</h5>
                                        <p>Rp. 5.000.000</p>
                                    </div>
                                </div>
                                <div className="product-focus-bid">
                                    <h5>Bid Price</h5>
                                    <form >
                                        <input required className="input-bid" onChange={(e) => setHarga(e.target.value)} type="text" placeholder="Rp 0,00" />
                                        <div className="text-center mt-4">
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