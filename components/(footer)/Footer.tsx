import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import React from 'react'

export const FooterPage = () => {
return (
    <Footer container className="dark:bg-slate-800">
        <div className="w-full  ">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-4">
                <div className="mb-4">
                    <Footer.Brand
                        href="/"
                        src="https://i.imgur.com/F1VLIwj.jpeg"
                        alt="myst3r10us black hat hackers"
                        name="myst3r10us"
                    />
                </div>
                <div className="flex flex-row flex-cols-2 gap-4 sm:mt-4 sm:grid-cols-3 sm:gap-4 items-center">
                    <div>
                        <Footer.Title title="Sections" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="/about">About</Footer.Link>
                            <Footer.Link href="/writeups">Writeups</Footer.Link>
                            <Footer.Link href="/contact">Contact Us</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Follow Our Socials" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="https://github.com/myst3r10us">Github</Footer.Link>
                            <Footer.Link href="https://ctftime.org/team/277613">CTFTime</Footer.Link>
                            <Footer.Link href="#">Discord</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Legal Information" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="myst3r10us" year={2024} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="#" target="_blank" icon={BsFacebook} />
                    <Footer.Icon href="#" target="_blank" icon={BsInstagram} />
                    <Footer.Icon href="#" target="_blank" icon={BsTwitter} />
                    <Footer.Icon href="https://github.com/myst3r10us" target="_blank" icon={BsGithub} />
                </div>
            </div>
        </div>
    </Footer>
);
}

export default FooterPage();
