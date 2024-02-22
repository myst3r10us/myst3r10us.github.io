import React from 'react';
import { Navigationbar } from "@/components/(navbar)/Navigationbar";
import { FooterPage } from "@/components/(footer)/Footer";

const Writeups = () => {
  const writeups = [
    { title: "Writeup 1", content: "This is the content of Writeup 1." },
    { title: "Writeup 2", content: "This is the content of Writeup 2." },
    { title: "Writeup 3", content: "This is the content of Writeup 3." },
  ];

  return (
    <div>
      <Navigationbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {writeups.map((writeup, index) => (
          <div key={index} style={{ maxWidth: '600px', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ marginBottom: '10px', color: '#333', fontSize: '24px', fontWeight: 'bold' }}>{writeup.title}</h2>
            <p style={{ color: '#666', fontSize: '16px' }}>{writeup.content}</p>
            <button style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
          </div>
        ))}
      </div>
      <FooterPage />
    </div>
  );
};

export default Writeups;
