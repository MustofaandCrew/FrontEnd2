import React from "react";
import renderer from "react-test-renderer";
import SidebarSellerMobile from "../components/SidebarSellerMobile";


describe("Test suits for SidebarSellerMobile", () => {
    it("should match with snapshot", () => {
        const tree = renderer.create(<SidebarSellerMobile />).toJSON();
    });
});