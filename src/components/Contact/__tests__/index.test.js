import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";
import ContactForm from "..";

afterEach(cleanup);

describe("Contact component", () => {
    // baseline test
    it("renders", () => {
        render(<ContactForm></ContactForm>);
    });
    // snapshot test
    it("matches snapshot", () => {
        const { asFragment } = render(<ContactForm></ContactForm>);
        // asset value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});
