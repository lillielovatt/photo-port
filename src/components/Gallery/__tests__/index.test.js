import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "..";

// will require a prop of currentCategory
// mock it here, instead of taking it from App component

const portrait = {
    name: "portraits",
    description: "Portraits of people in my life",
};

afterEach(cleanup);

describe("Gallery is rendering", () => {
    it("renders", () => {
        render(<Gallery currentCategory={portrait} />);
    });
    it("renders", () => {
        const { getByTestId } = render(<Gallery currentCategory={portrait} />);
        expect(getByTestId("h1tag")).toHaveTextContent("Portraits");
    });
});

describe("Gallery snapshot", () => {
    it("matches snapshot", () => {
        const { asFragment } = render();
        expect(asFragment()).toMatchSnapshot();
    });
});
