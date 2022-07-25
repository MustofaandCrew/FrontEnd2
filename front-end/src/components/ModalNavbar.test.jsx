import React from "react";
import renderer from "react-test-renderer";


describe("Test suits for ModalNavbar", () => {
    it("should match with snapshot", () => {
        const tree = renderer
            .create(
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title" id="exampleModalLabel">
                                    Categories
                                </h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                
                                    <li >
                                        <a className="a-modal" href="/">
                                            uhuy
                                        </a>
                                    </li>
                            </div>
                        </div>
                    </div>
                </div>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});