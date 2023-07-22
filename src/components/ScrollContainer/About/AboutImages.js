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
        const breakpoint = 1125; 
    
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
                image: require('../images/about-img/avif/skate-bowl.avif'),
                imagePng: require('../images/about-img/img/skate-bowl.jpg'),
                caption: 'Evergreen Skateparks are my favorite! I plan to travel and visit them all one day. This skatepark is in Fredericksburg, TX.',
                })
            }
            style={{
                backgroundImage: `url(${require('../images/about-img/img/skate-bowl.jpg')})`,
            }}
            ></div>

            <div 
            className="big-card card"
            onClick={() => handleImageClick({
                image: require('../images/about-img/avif/bmx-mag.avif'),
                imagePng: require('../images/about-img/img/bmx-mag.png'),
                caption: "I started riding BMX bikes as teenager and it helped grow the tenacity and perseverance to tackle difficult tasks. This is a photograph of me doing a 360 on the Fox Women's Tour featured in Dig BMX Magazine.",
                })
            }
            style={{
                backgroundImage: `url(${require('../images/about-img/img/bmx-mag.png')})`,
            }}
            ></div>

            <div 
            className="little-card card"
            onClick={() => handleImageClick({
                image: require('../images/about-img/avif/midjourney.avif'),
                imagePng: require('../images/about-img/img/midjourney.PNG'),
                caption: "I love art and sketch often. I am also an AI art enthusiast and utilize Midjourney to create text and image prompts. I'm especially interested in science fiction, space, fantasy, monsters, and pop art.",
                })
            }
            style={{
                backgroundImage: `url(${require('../images/about-img/img/midjourney.PNG')})`,
            }}
            ></div>

            <div 
            className="big-card card"
            onClick={() => handleImageClick({
                image: require('../images/about-img/avif/skate.avif'),
                imagePng: require('../images/about-img/img/skate.jpg'),
                caption: "I love roller skating at the skatepark, in the streets, and at the roller rink. This is a judo air at my favorite Pflugerville skatepark.",
                })
            }
            style={{
                backgroundImage: `url(${require('../images/about-img/img/skate.jpg')})`,
            }}
            ></div>

            <div className="little-card card"
            onClick={() => handleImageClick({
                image: require('../images/about-img/avif/kitties.avif'),
                imagePng: require('../images/about-img/img/kitties.jpg'),
                caption: "I have two lovely cats: Sen (left) and Vera (right).",
                })
            }
            style={{
                backgroundImage: `url(${require('../images/about-img/img/kitties.jpg')})`,
            }}
            ></div>

            <div className="big-card card"
            onClick={() => handleImageClick({
                image: require('../images/about-img/avif/Elizabeth.avif'),
                imagePng: require('../images/about-img/img/Elizabeth.jpg'),
                caption: "me!",
                })
            }
            style={{
                backgroundImage: `url(${require('../images/about-img/img/Elizabeth.jpg')})`,
            }}
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
                    alt= {selectedImage.caption}
                    className="modal-image" />
                    <div className="modal-caption">
                        {selectedImage.caption}
                        <div className="modal-button-container">
                        <button className="img-close-button" onClick={handleCloseModal}>
                            <div>
                                <span>CLOSE</span> <SvgClose/> 
                                </div>
                        </button>
                    </div>
                    </div>
                    </>
                )}

            </Modal>
        </div>
    )
}
export default AboutImages