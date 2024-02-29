import React from 'react';

const WriteupOnePage = () => {
    return (
        <div className="flex flex-col items-center justify-center mb-20 mt-20">
            <h1 className="text-6xl font-bold mb-4">Schrödinger&apos;s Cat 2</h1>
            <p className=" text-lg font-semibold mb-4">Miscellaneous category from SKRCTF.</p>
            <div className="flex flex-row mb-10">
                <p className="mr-4 text-sm text-gray-500">Published on: February 29, 2024 10:00 AM</p>
                <p className="text-sm text-gray-500">Last updated: February 29, 2024 11:30 AM</p>
                <p className="ml-42  text-sm text-gray-500">Author: z3phr0us</p>
            </div>
            <p className=" text-justify text-wrap text-lg w-3/5 h-48">
                One of my favorite CTF challenges in SKRCTF and I am so happy that I could solve this fun challenge.
                Before that, I suggest you do Schrödinger&apos;s Cat 1 first to get an idea of this challenge and my solution.
                <br/><br/>How do I find out the answer/flag? It is actually simple but quite a lengthy process.
            </p>


        </div>
    );
};

export default WriteupOnePage;
