import Image from "next/image";
import { Navigationbar } from "@/components/(navbar)/Navigationbar";
import { FooterPage } from "@/components/(footer)/Footer";

export default function Home() {
    return (
      <div>
        <Navigationbar />
        <FooterPage />
      </div>
    );
}

