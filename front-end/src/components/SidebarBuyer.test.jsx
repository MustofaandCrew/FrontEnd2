import React from "react";
import renderer from "react-test-renderer";
import SidebarBuyer from "../components/SidebarBuyer";


describe("Test suits for SidebarBuyer", () => {
    it("should match with snapshot", () => {
        const tree = renderer.create(<SidebarBuyer />).toJSON();
    });
});