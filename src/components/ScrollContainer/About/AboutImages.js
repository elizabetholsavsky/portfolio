import React, { useState } from 'react';
import Modal from 'react-modal';
import SvgClose from '../SVG/Close';
import './AboutImages.css';

const AboutImages = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="card-group">
            <div 
            className="little-card card"
            onClick={() => handleImageClick(require('../images/about-img/skate-bowl.jpg'))}
            ></div>

            <div 
            className="big-card card"
            onClick={() => handleImageClick(require('../images/about-img/bmx-mag.png'))}
            ></div>

            <div 
            className="little-card card"
            onClick={() => handleImageClick(require('../images/about-img/midjourney.PNG'))}
            ></div>

            <div 
            className="big-card card"
            onClick={() => handleImageClick(require('../images/about-img/skate.jpg'))}
            ></div>

            <div className="little-card card"
            onClick={() => handleImageClick(require('../images/about-img/kitties.jpg'))}
            ></div>

            <div 
            className="big-card card"
            ></div>

            <Modal
                isOpen={selectedImage !== null}
                onRequestClose={handleCloseModal}
                contentLabel="Image Modal"
                className="image-modal"
                overlayClassName="custom-overlay"
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
            >

                {selectedImage && (
                    <img 
                    src={selectedImage} 
                    alt="Full-size"
                    className="modal-image" />
                )}

                <div className="modal-button-container">
                    <button className="img-close-button" onClick={handleCloseModal}>
                        <div>
                            <span>CLOSE</span> <SvgClose/> 
                        </div>
                    </button>
                </div>

            </Modal>
        </div>
    )
}
export default AboutImages