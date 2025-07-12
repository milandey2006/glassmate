import GlassMateHero from "@/components/About";
import ResponsiveNavbar from "@/components/Navbar";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import EnhancedHeroDemo from "@/components/ui/hero-highlight";
import { Container } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ResponsiveNavbar />
      <EnhancedHeroDemo>
        <div className="font-bold text-[50px]">We Don’t Just Create Content — We Create Movements.</div>
      </EnhancedHeroDemo>
      <ContainerScroll>
        <img
          src="https://ui.aceternity.com/linear.webp"
          alt="Description"
          className="w-full h-full object-cover rounded-lg"
        />
      </ContainerScroll>
      <GlassMateHero />
    </div>
  );
}
