import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object for submission
        const form = new FormData();
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('message', formData.message);
        form.append('_next', 'http://localhost:3000/try');  // Replace with your thank you page URL
        form.append('_subject', 'New Form Submission');  // Set the email subject

        // Send the form data to FormSubmit endpoint
        fetch('https://formsubmit.co/72cbb4b2a2daec6e7b0347a2e2b9bfa8', {
            method: 'POST',
            body: form,
        })
            .then((response) => {
                if (response.ok) {
                    alert('Form submitted successfully!');
                    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
                } else {
                    alert('There was an error submitting the form.');
                }
            })
            .catch((error) => {
                alert('Error: ' + error.message);
            });
    };

    return (
        <div>
            <h2>Contact Us</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="email">Email:</label><br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="message">Message:</label><br />
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea><br /><br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ContactForm;
