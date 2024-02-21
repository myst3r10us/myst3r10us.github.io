import React from 'react';
import Image from 'next/image';
import bg from '../assets/background.png';
import avatar from '../assets/avatar.jpg';

export const HeroSection: React.FC = () => {
    return (
        <div
            style={{
                backgroundImage: bg.toString(),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '50px',
            }}
        >
            <div>
                <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Big Heading</h1>
                <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Subheading</h3>
                <p style={{ fontSize: '16px', marginBottom: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Image src={avatar} alt="Side Image" width={300} height={300} />
        </div>
    );
};

export default HeroSection;
