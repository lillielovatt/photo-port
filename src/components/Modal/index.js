import React from "react";

export default function Modal(props) {
    const { currentPhoto, onClose } = props;
    const { name, category, description, index } = currentPhoto;
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img
                    src={require(`../../assets/large/${category}/${index}.jpg`)}
                    alt="current category"
                />
                <p>{description}</p>
                <button type="button" onClick={onClose}>
                    Close this modal
                </button>
            </div>
        </div>
    );
}
