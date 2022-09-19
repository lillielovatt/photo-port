import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

// will require a prop of currentPhoto
// mock it here, instead of taking it

const currentPhoto = {
    name: "Park bench",
    category: "landscape",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    index: 1,
};

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe("Modal is rendering", () => {
    it("renders", () => {
        render(
            <Modal
                onClose={mockToggleModal}
                currentPhoto={currentPhoto}
            ></Modal>
        );
    });
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(
            <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

describe("click event", () => {
    it("calls onClose handler", () => {
        const { getByText } = render(
            <Modal
                onClose={mockToggleModal}
                currentPhoto={currentPhoto}
            ></Modal>
        );
        fireEvent.click(getByText("Close this modal"));

        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
});
