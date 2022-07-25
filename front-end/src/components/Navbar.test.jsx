import React from "react";
import renderer from "react-test-renderer";
import Navbar from "../components/Navbar";


describe("Test suits for Navbar", () => {
    it("should match with snapshot", () => {
        const tree = renderer.create(<Navbar />).toJSON();
    });
});