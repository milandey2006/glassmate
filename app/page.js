import { Analytics } from "@vercel/analytics/next"
import GlassMateHero from "@/components/About";
import ResponsiveNavbar from "@/components/Navbar";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import EnhancedHeroDemo from "@/components/ui/hero-highlight";
import Image from "next/image";
import TestimonialSection from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Analytics />

      <EnhancedHeroDemo>
        <div className="font-bold text-[50px]">We Dont Just Create Content — We Create Movements.</div>
      </EnhancedHeroDemo>
      <ContainerScroll>
        <Image
          src="https://ui.aceternity.com/linear.webp"
          alt="Description"
          className="w-full h-full object-cover rounded-lg"
        />
      </ContainerScroll>
      <GlassMateHero />
      <TestimonialSection />
    </div>
  );
}
