import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WriteupOnePage = () => {
    return (
        <div className="flex flex-col items-center justify-center mb-19 mt-20">
            <Link href="https://skrctf.me/challenges#Schr%C3%B6dinger's%20Cat%202" target="_blank">
                <h1 className="text-6xl font-bold underline mb-4">Schrödinger&apos;s Cat 2</h1>
            </Link>
            <p className=" text-lg font-semibold mb-4">Miscellaneous category from SKRCTF.</p>
            <div className="flex flex-row mb-10">
                <p className="mr-4 text-sm text-gray-500">Published on: February 29, 2024 10:00 AM</p>
                <p className="text-sm text-gray-500">Last updated: February 29, 2024 11:30 AM</p>
                <p className="ml-42  text-sm text-gray-500">Author: z3phr0us</p>
            </div>
            <Image
                src="https://i.imgur.com/lm1IGpx.png"
                alt="Schrödinger's Cat 2"
                width={400}
                height={400}
                unoptimized
                className="rounded-2xl mb-12"
            />
            <p className=" text-justify text-wrap text-lg font-DMS w-3/5 h-48">
                One of my favorite CTF challenges in SKRCTF and I am so happy that I could solve this fun challenge.
                Before that, I suggest you to do Schrödinger&apos;s Cat 1 first to get an idea of this 2nd challenge and my solution <br/> <span className="font-bold font-DMS">(Schrödinger&apos;s Cat 1 Challenge Link: <Link className="underline" href="https://skrctf.me/challenges#Schr%C3%B6dinger's%20Cat" target="_blank">here</Link>)</span> 
                <br/><br/>How do I find out the answer/flag? It is actually simple but quite a lengthy process. I will try my best to explain it in detail.
                <br/><br/>At the beginning, I just play around this guessing game by entering 1 or 2 as you can see in the terminal screenshot below.
            </p>
            <p className=" text-justify text-wrap text-lg font-DMS w-3/5 h-48">
                <br/><br/>Of course, initially I thought it is randomized until I restarted the game and tried countless times like a noob. Only to realize it is a fixed question and answer with that specific pattern. And I also realized that since the result is either 1 or 2 (alive or dead) can be interpreted as true or false in boolean and binary. So I come up with this idea 0 for Wrong (Dead) and 1 for Right (Alive)
                <br/><br/>From that information, we can find out SKR{} in binary format which are 01010011 01001011 01010010 01111011 01111101.
            </p>
            <Image
                src="https://i.imgur.com/EPmAu8b.png"
                alt="Schrödinger's Cat 2"
                width={400}
                height={400}
                unoptimized
                className="rounded-2xl mt-24 text-center"
            />
            <p className=" text-justify text-wrap text-lg font-DMS w-3/5 h-48">
                <br/><br/>Using the information and same idea to find the right answer from the correct answer (from the bot) and you will get something like what I did.
            </p>
            <Image
                src="https://i.imgur.com/yOZc8DH.png"
                alt="Schrödinger's Cat 2"
                width={400}
                height={400}
                unoptimized
                className="rounded-2xl text-center"
            />
            <Image
                src="https://i.imgur.com/4o2lwlm.png"
                alt="Schrödinger's Cat 2"
                width={400}
                height={400}
                unoptimized
                className="rounded-2xl text-center"
            />
                <p className=" text-justify text-wrap text-lg font-DMS w-3/5 h-48">
                    <br/><br/>Doing of all that, you just need to convert the binary to ASCII using any binary to ASCII converter (RapidTables) and you will get the flag. The flag is <span className="font-bold">SKR&#123;R1gh7_or_Wr0nG&#125;</span>

                </p>     
        </div>
    );
};

export default WriteupOnePage;
