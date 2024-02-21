import React from 'react';
import Image from 'next/image';
import avatar from '../assets/avatar.jpg';
import bg from '../assets/background.png';

export const HeroSection: React.FC = () => {
    return (
        <div
            style={{    
                backgroundImage: `url(${bg.src})`,
                width: '100%',
                height: '90vh',
                left: '0',
                top: '250px', // Adjust the value to move the image down
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <div className="font-DMS">
                <h1 style={{ fontSize: '10em', marginBottom: '10px', marginRight: '50px', top: "0", left: "50px", position: "relative" }}>
                    Hello, 
                    <span
                        style={{
                            content: "''",
                        }}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">&nbsp;Hackers</span>
                </h1>
                <h3 style={{ fontSize: '3em', marginBottom: '10px', lineHeight: '1.5', top: "0", left: "50px", position: "relative" }} className=" tracking-widest leading-loose bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500">Welcome to myst3r10us</h3>
                <p style={{ fontSize: '1.25em', marginBottom: '30px', fontStyle: 'italic', top: "0", left: "50px", position: "relative" }} className="text-center tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">We like to solve CTF Challenges</p>
            </div>
            <div style={{ position: 'relative', left: '-100px' }}>
                <Image src={avatar} alt="Side Image" width={400} height={400} style={{ animation: 'slide-in 5s forwards' }} />
            </div>
        </div>
    );
};

export default HeroSection;
