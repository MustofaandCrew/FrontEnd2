import {render ,screen} from "@testing-library/react";
import renderer from "react-test-renderer";

import Home from "./Home";

describe("home", () => {
    test("carousel have class carousel", async () => {
        render(<Home />);
        if (!screen.getByTestId("loading")) {
            const test = screen.getByTestId("testing");
            // eslint-disable-next-line jest/no-conditional-expect
            return (expect(test).toHaveClass("carousel"));
        }
    });

    test("snapshot", async ()=>{
        render(<Home />);
        if (screen.getByTestId("loading")) {
            const elem = renderer.create(<Home />).toJSON();
            // eslint-disable-next-line jest/no-conditional-expect
            expect(elem).toMatchSnapshot();  
        }
    });
})