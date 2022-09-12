import React from "react";
import { render, cleanup } from "@testing-library/react";
// render will "render" the component
// cleanup used to remove components from the DOM to prevent memory leaking as well as variable/data collisions bw tests

import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);
// will ensure after each test, we have no leftover memory data that could give us false results
describe("About component", () => {
    // first test, baseline to verify component is rendering
    it("renders", () => {
        render(<About />);
        // render(<About></About>)
    });
    // it function: 1st argument declares what's being tested, 2nd argument CB function runs test

    // second test
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<About />); //returns a snapshot of the About component
        expect(asFragment()).toMatchSnapshot();
    });
});
