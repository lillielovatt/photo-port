import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import PhotoList from "../PhotoList";

function Gallery({ currentCategory }) {
    // const { currentCategory } = props;
    const { name, description } = currentCategory;

    return (
        <section>
            {/* throwing an error */}
            {/* <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>  */}
            <p>{description}</p>

            <PhotoList category={currentCategory.name}></PhotoList>
        </section>
    );
}

export default Gallery;
