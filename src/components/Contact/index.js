import React, { useState } from "react";

function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const { name, email, message } = formState;

    function handleChange(event) {
        // We use the spread operator, ...formState, so we can retain the other key-value pairs in this object.
        setFormState({ ...formState, [event.target.name]: event.target.value });
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
                        onChange={handleChange}
                        defaultValue={name}
                        name="name"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        defaultValue={email}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        rows="5"
                        onChange={handleChange}
                        defaultValue={message}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;
