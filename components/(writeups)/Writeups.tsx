import React from 'react';
import Link from 'next/image';
import { Navigationbar } from "@/components/(navbar)/Navigationbar";
import { FooterPage } from "@/components/(footer)/Footer";
import WriteupOne from "@/components/(writeups)/WriteupOne";

const WriteupsPage = () => {
  const writeups = [
    { title: "Schrödinger's Cat 2", content: "Miscellaneous category from SKRCTF.", link: "/WriteupOne" },
  ];

  const writeupStyles = [
    { backgroundColor: '#f5f5f5', color: '#333' },
    { backgroundColor: '#ffffff', color: '#666' },
    { backgroundColor: '#f0f0f0', color: '#444' },
  ];

  return (
    <div>
      <section className="mt-8 mb-8">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '800px', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', ...writeupStyles[0] }}>
            <h2 style={{ marginBottom: '10px', fontSize: '24px', fontWeight: 'bold' }}>{writeups[0].title}</h2>
            <p style={{ fontSize: '16px' }}>{writeups[0].content}</p>
            <a href={writeups[0].link}>
              <button style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>View Solution</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WriteupsPage;
