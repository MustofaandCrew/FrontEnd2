import React from "react";
import renderer from "react-test-renderer";
import Notification from "../components/Notification";


describe("Test suits for Notification", () => {
    it("should match with snapshot", () => {
        const tree = renderer.create(<Notification />).toJSON();
    });
});