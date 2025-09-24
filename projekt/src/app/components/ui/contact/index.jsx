"use client";
import Subscribe from "../subscribe";
import "./contact.scss"
import { useState } from "react";

// Taget fra tidligere project

function ContactForm() {
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    /*  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; */

    return (
        <>
            <div className="wrapper">

                <form className="contact">
                    <label htmlFor="email" className="contact__wrap">
                        <span>Email:</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="contact__wrap__input"
                        />
                    </label>
                    <label htmlFor="text" className="contact__wrap">
                        <span>Message:</span>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                            maxLength="200ch"
                            className="contact__wrap__input contact__wrap__message"
                        />
                    </label>
                    <button type="submit" className="contact__submit">Send message</button>
                </form>
                <Subscribe />
            </div>
        </>
    );
}

export default ContactForm;