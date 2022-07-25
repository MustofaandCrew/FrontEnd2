import React from "react";
import renderer from "react-test-renderer";
import SidebarBuyerMobile from "../components/SidebarBuyerMobile";


describe("Test suits for SidebarBuyerMobile", () => {
    it("should match with snapshot", () => {
        const tree = renderer.create(<SidebarBuyerMobile />).toJSON();
    });
});