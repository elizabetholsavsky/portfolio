import React, { useState } from 'react';
import Modal from 'react-modal';
import resumePDF from '../images/Olsavsky-Resume.pdf';
import SvgEye from '../SVG/Eye';
import './Resume.css';

const ViewButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button className="view-button" onClick={openModal}>
                <div>
                    <SvgEye/> <span>View PDF</span>
                </div>
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                contentLabel="PDF Modal"
                ariaHideApp={false}
                overlayClassName="custom-overlay" 
            >
                <button className="close-button" onClick={closeModal}>Close</button>
                <iframe src={resumePDF} title="PDF Viewer" width="100%" height="100%" />
            </Modal>
        </div>
    );
};

export default ViewButton;