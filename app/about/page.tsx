import React from 'react'
import { Navigationbar } from "@/components/(navbar)/Navigationbar";

const components: {title: string; href: string; description: string }[] = [
    {
        title: "What is myst3r10us?",
        href: "",
        description:
            "A Malaysian-based CTF team that starts in November 2023.",
    },
    {
        title: "Why myst3r10us?",
        href: "",
        description:
            "It started from 'Mysterious Three Flaggers' and it shortened to myst3r10us.",
    },
    {
        title: "Our CTFTime Team Profile",
        href: "https://ctftime.org/team/277613",
        description:
            "Check out how many CTFs we have participated in!",
    },
    {
        title: "Join myst3r10us",
        href: "",
        description: "Want to join the team? Contact us for further information!",
    },
];

const About = () => {
  return (
    <div>
      <Navigationbar />
      <h1 className="text-4xl font-bold">About myst3r10us</h1>
      {components.map((component, index) => (
        <div key={index}>
          <h2>{component.title}</h2>
          <p>{component.description}</p>
          {component.href && <a href={component.href}>Learn More</a>}
        </div>
      ))}
    </div>
  )
}

export default About
