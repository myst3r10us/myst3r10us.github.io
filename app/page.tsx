import Image from "next/image";
import { Navigationbar } from "@/components/(navbar)/Navigationbar";
import { FooterPage } from "@/components/(footer)/Footer";
import Hero from "@/components/(herosection)/Hero";

export default function Home() {
    return (
      <div>
        <Navigationbar />
        <Hero/>
        <FooterPage />
      </div>
    );
}

