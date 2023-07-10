import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

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
                </div>

                <div className="form-container">
                    <form ref={form} onSubmit={sendEmail}>

                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        name="user_name"
                        required
                        onBlur={handleBlur}
                        onChange={handleInputChange}
                        aria-describedby="name-error"
                        />

                        {nameError && <div id="name-error" className="error" role="alert">{nameError}</div>}

                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        name="user_email"
                        required
                        onBlur={handleBlur}
                        onChange={handleInputChange}
                        aria-describedby="email-error"
                        />

                        {emailError && <div id="email-error" className="error" role="alert">{emailError}</div>}

                        <label htmlFor="message">Message</label>
                        <textarea name="message"></textarea>

                        <button className="submit-button" type="submit">
                        Send
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
