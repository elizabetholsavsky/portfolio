import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import SvgClose from '../SVG/Close';
import './AboutImages.css';

const AboutImages = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isHoverInitiated, setIsHoverInitiated] = useState(false);

    const handleImageClick = (imageData) => {
        setSelectedImage(imageData);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        const breakpoint = 825; 
    
        const handleViewportResize = () => {
            if (window.innerWidth < breakpoint) {
                setIsHoverInitiated(true);
            } else {
                setIsHoverInitiated(false);
            }
        };
    
        handleViewportResize();
        window.addEventListener('resize', handleViewportResize);
    
        return () => {
            window.removeEventListener('resize', handleViewportResize);
        };
    }, []);

    return (
        <div className={`card-group ${isHoverInitiated ? 'initiate-hover' : ''}`}>
            <div 
            className="little-card card"
            onClick={() => handleImageClick({
                image: require('../images/about-img/skate-bowl.jpg'),
                caption: 'Caption for the first image',
                })
            }
            style={{
                backgroundImage: `url(${require('../images/about-img/skate-bowl.jpg')})`,
            }}
            ></div>

            <div 
            className="big-card card"
            onClick={() => handleImageClick({
                image: require('../images/about-img/bmx-mag.png'),
                caption: 'Caption for the second image',
                })
            }
            style={{
                backgroundImage: `url(${require('../images/about-img/bmx-mag.png')})`,
            }}
            ></div>

            <div 
            className="little-card card"
            onClick={() => handleImageClick({
                image: require('../images/about-img/midjourney.PNG'),
                caption: 'Caption for the third image',
                })
            }
            style={{
                backgroundImage: `url(${require('../images/about-img/midjourney.PNG')})`,
            }}
            ></div>

            <div 
            className="big-card card"
            onClick={() => handleImageClick({
                image: require('../images/about-img/skate.jpg'),
                caption: 'Caption for the fourth image',
                })
            }
            style={{
                backgroundImage: `url(${require('../images/about-img/skate.jpg')})`,
            }}
            ></div>

            <div className="little-card card"
            onClick={() => handleImageClick({
                image: require('../images/about-img/kitties.jpg'),
                caption: 'Caption for the fifth image',
                })
            }
            style={{
                backgroundImage: `url(${require('../images/about-img/kitties.jpg')})`,
            }}
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
                    <>
                    <img 
                    src={selectedImage.image}  
                    alt="Full-size"
                    className="modal-image" />
                    <div className="modal-caption">
                        {selectedImage.caption}
                    </div>
                    <div className="modal-button-container">
                        <button className="img-close-button" onClick={handleCloseModal}>
                            <div>
                                <span>CLOSE</span> <SvgClose/> 
                                </div>
                        </button>
                    </div>
                    </>
                )}

            </Modal>
        </div>
    )
}
export default AboutImages