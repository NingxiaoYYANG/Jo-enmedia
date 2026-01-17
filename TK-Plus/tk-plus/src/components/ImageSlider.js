import React, { useState } from 'react';
import './ImageSlider.css'; // Create a CSS file for styling

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slider-container">
            <img src={images[currentIndex]} alt="slider" className="slider-image" />
            <div className="slider-controls">
                <button onClick={prevImage} className="slider-button">&lt;</button>
                <button onClick={nextImage} className="slider-button">&gt;</button>
            </div>
        </div>
    );
};

export default ImageSlider;
