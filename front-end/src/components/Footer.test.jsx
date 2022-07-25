import React from "react";
import renderer from "react-test-renderer";

describe("Test suits for Footer", () => {
    it("should match with snapshot", () => {
        const tree = renderer
            .create(
                <div className="mt-5 footer-container">
                    <hr />
                    <div className="container">
                        <div className="row g-3 footer-row">
                            <div className="col-lg-6">
                                <h5 className="text-uppercase">About Us</h5>
                                <p>
                                    SecondHand is a place to buy and sell goods online, especially "secondhand" goods. This platform opens and provides various types of need categories. Registered users In this
                                    application, you can act as a seller and a buyer by using the same 1 (one) account. This platform will bring together sellers and buyers to be able to negotiate goods and make
                                    transactions directly outside the platform.
                                </p>
                            </div>
                            <div className="col-sm-4 col-md-2">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        Home
                                    </li>
                                    <li>

                                        Login

                                    </li>
                                    <li>

                                        Register

                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-8 col-lg-4">
                                <h5 className="text-uppercase">Categories</h5>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul className="list-unstyled">
                                            <li>

                                                Electronic

                                            </li>
                                            <li>

                                                Gadgets

                                            </li>
                                            <li>

                                                Sneakers

                                            </li>
                                            <li>

                                                Fashion

                                            </li>
                                            <li>

                                                Tools

                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul className="list-unstyled">
                                            <li>

                                                Health & Beauty

                                            </li>
                                            <li>

                                                Baby

                                            </li>
                                            <li>

                                                Hobby

                                            </li>
                                            <li>

                                                Gaming

                                            </li>
                                            <li>

                                                Furniture

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className="text-center">2022 Copyright Store. All Rights Reserved.</p>
                </div>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});