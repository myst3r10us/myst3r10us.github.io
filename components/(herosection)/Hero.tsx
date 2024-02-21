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
            <div>
                <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Big Heading</h1>
                <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Subheading</h3>
                <p style={{ fontSize: '16px', marginBottom: '0p x' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Image src={avatar} alt="Side Image" width={400} height={400} />
        </div>
    );
};

export default HeroSection;
