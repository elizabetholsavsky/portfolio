import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReactModal from "react-modal";
import "./Contact.css";
import SvgEmail from "../SVG/Email.js"
import SvgAddme from "../SVG/Addme";
import SvgFreelance from "../SVG/Freelance";
import SvgGroup from "../SVG/Group";
import SvgClose from "../SVG/Close";

const Contact = () => {
    const form = useRef();
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = form.current.user_email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.match(emailRegex)) {
        setEmailError("Please enter a valid email address.");
        return;
    } else {
        setEmailError("");
    }

    const nameInput = form.current.user_name;
    if (nameInput.value.trim() === "") {
        setNameError("Enter your name");
        return;
    } else {
        setNameError("");
    }

    emailjs
        .sendForm(
            "service_r9nde4u",
            "template_31qnvnr",
            form.current,
            "CsUFZHv0KdyANVSMV"
        )
        .then(
            (result) => {
            console.log(result.text);
            setModalIsOpen(true);
            },
            (error) => {
            console.log(error.text);
            }
        );

        e.target.reset();
    };

    const handleBlur = (e) => {
        const fieldName = e.target.name;
        if (fieldName === "user_name" && e.target.value.trim() === "") {
            setNameError("Please enter your name.");
        } else if (fieldName === "user_email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!e.target.value.match(emailRegex)) {
                setEmailError("Enter a valid email address");
            } else {
                setEmailError("");
            }
        }
    };

    const handleInputChange = (e) => {
        const fieldName = e.target.name;

        if (fieldName === "user_name") {
            setNameError("");
        } else if (fieldName === "user_email") {
            setEmailError("");
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <section aria-label="contact" id="contact" className="contact-section">
            
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Message Sent Modal"
                className="message-modal"
                overlayClassName="custom-overlay"
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                >
                <div onClick={closeModal} className="modal-overlay" /> 
                <h2>Your message has been sent!</h2>
                <p>Thank you for getting in touch. Anticipate a prompt response from <span className="email">elizabetholsavsky@gmail.com</span>.</p>

                <div className="modal-button-container">
                    <button className="contact-close-button" onClick={closeModal}>
                        <div>
                            <span>CLOSE</span> <SvgClose/> 
                        </div>
                    </button>
                </div>

            </ReactModal>

            <div className="content-container">

                <div className="content-text">
                    <h2> Contact </h2>
                    <h3> Let's Connect! </h3>
                </div>

                <div className="form-card">
                    <div className="message-container">
                        <div className="contact-message">
                            <p className="seeking-title">Enthusiastically seeking...</p>

                                <div className="seeking-container">
                                    <div className="contact-dot"><SvgAddme/></div> 
                                    <p>new job opportunities</p>
                                </div>

                                <div className="seeking-container">
                                    <div className="contact-dot"><SvgFreelance/></div> 
                                    <p>freelance & contract work</p>
                                </div>

                                <div className="seeking-container">
                                    <div className="contact-dot"><SvgGroup/></div> 
                                    <p>open source collaboration</p>
                                </div>
                            
                        </div>
                    </div>

                    <div className="form-container">
                        <form ref={form} onSubmit={sendEmail}>

                            <h4 className="email-note">Email <span className="email"><a href="mailto:elizabetholsavsky@gmail.com">elizabetholsavsky@gmail.com</a></span> or send me a note below</h4>
                            <br/>
                            <div className="input-container">
                                <label htmlFor="name">Name</label>
                                <input
                                type="text"
                                id="name"
                                name="user_name"
                                required
                                onBlur={handleBlur}
                                onChange={handleInputChange}
                                aria-describedby="name-error"
                                autoComplete="given-name"
                                />

                                {nameError && <div id="name-error" className={`error ${nameError ? 'show' : ''}`} role="alert">{nameError}</div>}
                            </div>

                            <div className="input-container">
                                <label htmlFor="email">Email</label>
                                <input
                                type="email"
                                id="email"
                                name="user_email"
                                required
                                onBlur={handleBlur}
                                onChange={handleInputChange}
                                aria-describedby="email-error"
                                autoComplete="email"
                                />

                                {emailError && <div id="email-error" className={`error ${emailError ? 'show' : ''}`} role="alert">{emailError}</div>}
                            </div>

                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" autoComplete="off"></textarea>
                            
                            <div className="submit-button-container">
                                <button className="submit-button" type="submit">
                                    <div>
                                        <SvgEmail/> <span>Send</span>
                                    </div>
                                </button>
                            </div>
                            
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
