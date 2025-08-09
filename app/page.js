import { Analytics } from "@vercel/analytics/next";
import GlassMateHero from "@/components/About";
import ResponsiveNavbar from "@/components/Navbar";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import EnhancedHeroDemo from "@/components/ui/hero-highlight";
import Image from "next/image";
import TestimonialSection from "@/components/testimonials";
import RotatingClients from "@/components/Clients";

export default function Home() {
  return (
    <div>
      <Analytics />

      <EnhancedHeroDemo>
        <div className="font-bold text-[50px]">
          We Dont Just Create Content — We Create Movements.
        </div>
      </EnhancedHeroDemo>
      <ContainerScroll
        mobileImageSrc="/homepage/collage.png"
        desktopImageSrc="/homepage/collage.png"
      >
      </ContainerScroll>
      <GlassMateHero />
      <RotatingClients />
      <TestimonialSection />
    </div>
  );
}
