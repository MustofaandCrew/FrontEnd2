import React from "react";
import renderer from "react-test-renderer";


describe("Test suits for Card", () => {
    it("should match with snapshot", () => {
        const tree = renderer
            .create(
                    <div className="col h-100">
                        <div className="card h-100">
                            <img src="https://ncrsport.com/img/storage/large/553558-125-1.jpg" className="thumbnail-card" alt="img" data-testid="image" />
                            <div className="card-body">
                                <h5 className="card-title thumbnail-text" data-testid="thumbnail-test">Air Jordan</h5>
                                <p className="card-text price-text" data-testid="price-test">Rp. 5.000.000</p>
                            </div>
                        </div>
                    </div>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});