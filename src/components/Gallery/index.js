import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import PhotoList from "../PhotoList";

function Gallery({ currentCategory }) {
    // const { currentCategory } = props;
    // const { name, description } = currentCategory;

    return (
        <section>
            <h1 data-testid="h1tag">
                {capitalizeFirstLetter(currentCategory.name)}
            </h1>
            <p>{currentCategory.description}</p>

            <PhotoList category={currentCategory.name}></PhotoList>
        </section>
    );
}

export default Gallery;
