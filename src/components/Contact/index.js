import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");

    // setErrorMessage(...errorMessage,[event.target.name]: "Your email is invalid");

    const { name, email, message } = formState;

    function handleChange(event) {
        if (event.target.name === "email") {
            const isValid = validateEmail(event.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({
                ...formState,
                [event.target.name]: event.target.value,
            });
        }
        // We use the spread operator, ...formState, so we can retain the other key-value pairs in this object.
        // we have to wrap the key part of the key-value pair in [] to indicate is not the name, but a variable value
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    {/* need to use htmlFor due to keywords used in JS */}
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        onBlur={handleChange}
                        defaultValue={name}
                        name="name"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input
                        type="email"
                        name="email"
                        onBlur={handleChange}
                        defaultValue={email}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        rows="5"
                        onBlur={handleChange}
                        defaultValue={message}
                    />
                </div>
                {/* short circuit */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;
