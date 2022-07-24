import {render ,screen, waitFor} from "@testing-library/react";
import renderer from "react-test-renderer";

import Home from "./Home";

beforeAll
describe("home", () => {
    test("carousel have class carousel", async () => {
        render(<Home />);
        const test = await waitFor (() => {
            screen.getByTestId("testing")
        })
        // const test = screen.getByTestId("testing");
        expect(test).toHaveClass("carousel");
    });

    test("snapshot", ()=>{
        const elem = renderer.create(<Home />).toJSON();
        expect(elem).toMatchSnapshot();
    });
})