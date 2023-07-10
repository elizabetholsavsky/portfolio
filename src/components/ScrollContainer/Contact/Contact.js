import {useRef} from "react";
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_r9nde4u', 'template_31qnvnr', form.current, 'CsUFZHv0KdyANVSMV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        };

    return (
        <section aria-label="contact" id="contact" className='contact-section'>
            <div className="content-container">
                <div className="content-text">
                    <h2> Contact </h2>
                </div>

                <div className="form-container">
                    <form ref={form} onSubmit={sendEmail}> 
                        <input type="text" placeholder='Name' name="user_name" required/>
                        <input type="email" placeholder='Email' name="user_email" required/>
                        <input type="text" placeholder='Subject' name="subject" required/>
                        <textarea name="message"></textarea>
                        <button className="submit-button" type="submit"> Send </button>
                    </form>
                </div>

            </div>
        </section>
    )
}
export default Contact