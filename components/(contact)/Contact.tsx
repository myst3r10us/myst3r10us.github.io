"use client";

import axios from 'axios';
import React, { useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast.success('Email sent successfully!');
        } catch (error) {
            console.error(error);
            toast.error('Failed to send email.');
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
        <form onSubmit={handleSubmit} className='w-full max-w-sm mx-auto bg-white shadow-md rounded-[35px] px-8 pt-6 pb-8 mb-36 mt-20'>
            <div className='mb-4'>
                <label className='block text-gray-500    font-bold mb-1' htmlFor='name'>
                    Your Name
                </label>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-slate-100 leading-tight focus:outline-none focus:shadow-outline bg-slate-700'
                    id='name'
                    type='text'
                    placeholder='Your Name'
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-500 font-bold mb-1' htmlFor='email'>
                    Your Email
                </label>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-slate-100 leading-tight focus:outline-none focus:shadow-outline bg-slate-700'
                    id='email'
                    type='email'
                    placeholder='Your Email'
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-500 font-bold mb-1' htmlFor='message'>
                    Message
                </label>
                <textarea
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-slate-100 leading-tight focus:outline-none focus:shadow-outline bg-slate-700'
                    id='message'
                    cols={30}
                    rows={10}
                    placeholder='Your Message'
                    value={message}
                    onChange={handleMessageChange}
                />
            </div>
            <button
                type='submit'
                className='bg-sky-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
                Send Email
            </button>
        </form>
    );
};

export default ContactPage;
