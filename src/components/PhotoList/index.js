import React, { useState } from "react";
import Modal from "../Modal";

// Remember that components are just functions. The only difference is that they return JSX and may use React Hooks.
function PhotoList(props) {
    const { category } = props;
    const [photos] = useState([
        {
            name: "Grocery aisle",
            category: "commercial",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Grocery booth",
            category: "commercial",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Building exterior",
            category: "commercial",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Restaurant table",
            category: "commercial",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Cafe interior",
            category: "commercial",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Cat green eyes",
            category: "portraits",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Green parrot",
            category: "portraits",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Yellow macaw",
            category: "portraits",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Pug smile",
            category: "portraits",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Pancakes",
            category: "food",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Burrito",
            category: "food",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Scallop pasta",
            category: "food",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Burger",
            category: "food",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Fruit bowl",
            category: "food",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Green river",
            category: "landscape",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Docks",
            category: "landscape",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Panoramic village by sea",
            category: "landscape",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Domestic landscape",
            category: "landscape",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
        {
            name: "Park bench",
            category: "landscape",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [currentPhoto, setCurrentPhoto] = useState();

    // more like openModal, since closing it is something for Modal to do
    const openModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        // spread operator used to add index:i key value pair to current photo state

        // toggles from true to false
        setIsModalOpen(true);
    };

    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => openModal(image, i)}
                        key={image.name}
                    />
                ))}
                {isModalOpen && (
                    <Modal
                        currentPhoto={currentPhoto}
                        onClose={() => setIsModalOpen(false)}
                        // we are trying to call it, not passed as prop whenever you want, so need arrow function
                    ></Modal>
                )}
            </div>
        </div>
    );
}

export default PhotoList;
