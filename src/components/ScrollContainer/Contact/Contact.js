import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import SvgEmail from "../SVG/Email.js"

const Contact = () => {
    const form = useRef();
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");

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
        setNameError("Please enter your name.");
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
                setEmailError("Please enter a valid email address.");
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

    return (
        <section aria-label="contact" id="contact" className="contact-section">
            <div className="content-container">

                <div className="content-text">
                    <h2> Contact </h2>
                    <h3> Let's Connect! </h3>
                </div>

                <div className="form-card">
                    <div className="message-container">
                        <h4>Add me</h4>
                        <br/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptates laudantium neque rerum veritatis rem deserunt error cumque sapiente! Distinctio temporibus vitae error quia ut et similique! Consectetur, velit porro.</p>
                    </div>

                    <div className="form-container">
                        <form ref={form} onSubmit={sendEmail}>

                            <h4>Send a message</h4>
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
