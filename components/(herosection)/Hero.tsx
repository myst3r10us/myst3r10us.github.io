import React from 'react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
    return (
        <div
            style={{
                backgroundImage: `url('/path/to/background-image.jpg')`,
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
            <img src="/path/to/side-image.jpg" alt="Side Image" style={{ width: '300px' }} />
        </div>
    );
};

export default HeroSection;
