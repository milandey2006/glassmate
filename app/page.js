import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Container } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroHighlight>
        <div className="font-bold text-[50px]">We Don’t Just Create Content — We Create Movements.</div>
      </HeroHighlight>
      <ContainerScroll>
        <img
          src="https://ui.aceternity.com/linear.webp"
          alt="Description"
          className="w-full h-full object-cover rounded-lg"
        />
      </ContainerScroll>
    </div>
  );
}
