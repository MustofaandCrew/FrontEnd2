import React from "react";
import renderer from "react-test-renderer";


describe("Test suits for CardDashboard", () => {
    it("should match with snapshot", () => {
        const tree = renderer
            .create(
                <div className="col">
                <div className="card h-100">
                  <img src="https://ncrsport.com/img/storage/large/553558-125-1.jpg" className="card-img-top card-img" alt="img" data-testid="image"/>
                  <div className="card-body d-flex flex-column" data-testid="body">
                    <h5 className="card-title thumbnail-text">Air Jordan</h5>
                    <p className="card-text price-text">Rp. 5.000.000</p>
                    <div className="row mt-auto g-3">
                      <div className="col-lg-6 d-flex">
                        <button className="btn flex-fill btn-primary" data-bs-toggle="modal">
                          Edit
                        </button>
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