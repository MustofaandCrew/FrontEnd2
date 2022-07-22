import {render ,screen} from "@testing-library/react";
import renderer from "react-test-renderer";

import Home from "./Home";

describe("home", () => {
    test("carousel have class carousel slide", () => {
        render(<Home />);
        const test = screen.getByTestId("testing");
        expect(test).toHaveClass("carousel slide");
    });

    test("snapshot", ()=>{
        const elem = renderer.create(<Home />).toJSON();
        expect(elem).toMatchSnapshot();
    });
})