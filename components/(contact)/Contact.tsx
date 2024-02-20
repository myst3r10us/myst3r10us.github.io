"use client"

import axios from 'axios';
import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';

export const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = "service_6l0i1qp";
        const templateId = "template_viokzti";
        const publicKey = "b3SwLFy_ZWa5RC7Zw";

        // Create an object with EmailJS service ID, template ID, Public Key, and Template params
        const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
            from_name: name,
            from_email: email,
            to_name: 'Web Wizard',
            message: message,
        }
        };

        // Send the email using EmailJS
        try {
        const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
        console.log(res.data);
        setName('');
        setEmail('');
        setMessage('');
        } catch (error) {
        console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='emailForm'>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                cols={30}
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>
            <button type="submit">Send Email</button>
        </form>
    );
};

export default ContactPage;
