import React from "react";
import renderer from "react-test-renderer";
import SidebarSeller from "../components/SidebarSeller";


describe("Test suits for SidebarSeller", () => {
    it("should match with snapshot", () => {
        const tree = renderer.create(<SidebarSeller />).toJSON();
    });
});