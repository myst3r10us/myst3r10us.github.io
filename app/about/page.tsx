import React from 'react';
import { Navigationbar } from '@/components/(navbar)/Navigationbar';
import { FooterPage } from "@/components/(footer)/Footer";
import { DatabaseZap } from 'lucide-react'
import Image from 'next/image'

const components: { title: string; href: string; description: string }[] = [
  { 
    title: 'What is myst3r10us?',
    href: '',
    description:
      'A Malaysian-based CTF team that started in November 2023. We are a group of cybersecurity enthusiasts who are passionate about solving challenges and learning new things. And here we are.',
  },
  {
    title: 'Why myst3r10us?',
    href: '',
    description:
      "It started from 'Mysterious Three Flaggers' and over time, it shortened to myst3r10us. We are also known as M3Flaggers, my$t3r10u$. my5t3r10u5..",
  },
  {
    title: 'Our CTFTime Team Profile',
    href: 'https://ctftime.org/team/277613',
    description:
      'Check out how many CTFs we have participated in! Do not expect good things lol.',
  },
  {
    title: 'Join myst3r10us?!?',
    href: '',
    description:
      'Unfortunately, we do not plan to invite more people to join the team, but keep in mind that we will recruit new team members in the near future. For now, we are open to collaboration and partnership. Feel free to reach out to us if you have any interesting ideas or projects to work together.',
  },
];

const About = () => {
  return (
    <div className=" bg-slate-900 min-h-screen">
      <Navigationbar />
      <div className="container mx-auto py-8 mb-20">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <h1 className="text-6xl flex items-center justify-center flex-row-2 font-bold mt-10 mb-20 text-center underline">
              <DatabaseZap size={90 } className="items-center justify-center mr-2 underline" />
              <span className="mr-10">
                About myst3r10us
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://i.imgur.com/jtcMGsC.jpg"
              unoptimized
              alt="myst3r10us"
              width={300}
              height={300}
              className="mb-16 py-4"
            />
          </div>
        </div>
        {components.map((component, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold mb-2">{component.title}</h2>
            <p className=" text-lg text-cyan-500 mb-4">{component.description}</p>
            {component.href && (
              <a
                href={component.href}
                className="text-blue-500 hover:underline"
              >
                View CTF Team Profile on CTFTime
              </a>
            )}
          </div>
        ))}
      </div>
      <FooterPage />
    </div>
  );
};

export default About;
