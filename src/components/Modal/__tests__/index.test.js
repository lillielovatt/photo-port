import React from "react";
import { render, cleanup } from "@testing-library/react";
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

const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    // spread operaor used to add index:i key value pair to current photo state

    // toggles from true to false
    setIsModalOpen(!isModalOpen);
};

afterEach(cleanup);

describe("Modal is rendering", () => {
    it("renders", () => {
        render(<Modal></Modal>);
    });
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<Modal />);
        expect(asFragment()).toMatchSnapshot();
    });
});
