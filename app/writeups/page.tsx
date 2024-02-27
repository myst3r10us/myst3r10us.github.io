import React from 'react';
import { Navigationbar } from "@/components/(navbar)/Navigationbar";
import { FooterPage } from "@/components/(footer)/Footer";

const Writeups = () => {
  const writeups = [
    { title: "Schrödinger's Cat 2", content: "Miscellaneous category from SKRCTF." },
    { title: "Schrödinger's Cat 2", content: "Miscellaneous category from SKRCTF." },
    { title: "Schrödinger's Cat 2", content: "Miscellaneous category from SKRCTF." }
  ];

  const writeupStyles = [
    { backgroundColor: '#f5f5f5', color: '#333' },
    { backgroundColor: '#ffffff', color: '#666' },
    { backgroundColor: '#f0f0f0', color: '#444' },
  ];

  return (
    <div>
      <Navigationbar />
      <section className="mt-8 mb-8">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {writeups.map((writeup, index) => (
            <div key={index} style={{ width: '800px', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', ...writeupStyles[index % writeupStyles.length] }}>
              <h2 style={{ marginBottom: '10px', fontSize: '24px', fontWeight: 'bold' }}>{writeup.title}</h2>
              <p style={{ fontSize: '16px' }}>{writeup.content}</p>
              <button style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>View Solution</button>
            </div>
          ))}
        </div>
      </section>
      <FooterPage />
    </div>
  );
};

export default Writeups;
