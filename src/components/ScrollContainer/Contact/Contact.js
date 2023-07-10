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

                        <input
                        type="text"
                        placeholder="Name"
                        name="user_name"
                        required
                        onBlur={handleBlur}
                        onChange={handleInputChange}
                        />

                        {nameError && <div className="error">{nameError}</div>}

                        <input
                        type="email"
                        placeholder="Email"
                        name="user_email"
                        required
                        onBlur={handleBlur}
                        onChange={handleInputChange}
                        />

                        {emailError && <div className="error">{emailError}</div>}

                        <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        />

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
