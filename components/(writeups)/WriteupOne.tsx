import React from 'react';
import Link from 'next/link';

const WriteupOnePage = () => {
    return (
        <div className="flex flex-col items-center justify-center mb-20 mt-20">
            <Link href="https://skrctf.me/challenges#Schr%C3%B6dinger's%20Cat%202" target="_blank">
                <h1 className="text-6xl font-bold underline mb-4">Schrödinger&apos;s Cat 2</h1>
            </Link>
            <p className=" text-lg font-semibold mb-4">Miscellaneous category from SKRCTF.</p>
            <div className="flex flex-row mb-10">
                <p className="mr-4 text-sm text-gray-500">Published on: February 29, 2024 10:00 AM</p>
                <p className="text-sm text-gray-500">Last updated: February 29, 2024 11:30 AM</p>
                <p className="ml-42  text-sm text-gray-500">Author: z3phr0us</p>
            </div>
            <p className=" text-justify text-wrap text-lg font-DMS w-3/5 h-48">
                One of my favorite CTF challenges in SKRCTF and I am so happy that I could solve this fun challenge.
                Before that, I suggest you to do Schrödinger&apos;s Cat 1 first to get an idea of this 2nd challenge and my solution <br/> <span className="font-bold font-DMS">(Schrödinger&apos;s Cat 1 Challenge Link: <Link className="underline" href="https://skrctf.me/challenges#Schr%C3%B6dinger's%20Cat" target="_blank">here</Link>)</span> 
                <br/><br/>How do I find out the answer/flag? It is actually simple but quite a lengthy process. I will try my best to explain it.

                
            </p>


        </div>
    );
};

export default WriteupOnePage;
