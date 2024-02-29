import axios from 'axios';
import React, { useState, FormEvent } from 'react';

interface EmailParams {
    from_name: string;
    from_email: string;
    to_name: string;
    message: string;
}

export const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const serviceId = "service_6l0i1qp";
        const templateId = "template_viokzti";
        const publicKey = "b3SwLFy_ZWa5RC7Zw";

        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                from_name: name,
                from_email: email,
                to_name: 'myst3r10us',
                message: message,
            } as EmailParams,
        };

        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error(error);
        }
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className='emailForm'>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={handleNameChange}
            />
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={handleEmailChange}
            />
            <textarea
                cols={30}
                rows={10}
                value={message}
                onChange={handleMessageChange}
            />
            <button type="submit">Send Email</button>
        </form>
    );
};

export default ContactPage;
