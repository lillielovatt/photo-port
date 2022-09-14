import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navigation from "..";

const categories = [
    { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

// each describe function is not technically necessary for test to run; used to organize tests
afterEach(cleanup);

describe("Nav component", () => {
    // baseline test
    it("renders", () => {
        render(
            <Navigation
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockCurrentCategory}
            />
        );
    });
    // snapshot test
    it("matches snapshot", () => {
        const { asFragment } = render(
            <Navigation
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockCurrentCategory}
            />
        );
        // asset value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

// Not only can we test if the component renders, but we can only test for individual elements.
// This is an important feature when we wish to verify if important elements are visible.
describe("emoji is visible", () => {
    it("inserts emoji into the h2", () => {
        // arrange
        const { getByLabelText } = render(
            <Navigation
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockCurrentCategory}
            />
        );
        // assert
        expect(getByLabelText("camera")).toHaveTextContent("📸");
    });
});

describe("links are visible", () => {
    it("inserts text into the links", () => {
        // arrange
        const { getByTestId } = render(
            <Navigation
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockCurrentCategory}
            />
        );
        // assert
        expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
        expect(getByTestId("about")).toHaveTextContent("About Me");
    });
});
