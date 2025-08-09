"use client";
import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
  mobileImageSrc,
  desktopImageSrc
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.8, 1.0] : [1.05, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, 2]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions().reverse());
  const translate = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <div
      className="h-[70vh] md:h-[40rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div className="py-6 md:py-40 w-full relative" style={{ perspective: "1000px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          scale={scale}
          isMobile={isMobile}
          mobileImageSrc={mobileImageSrc}
          desktopImageSrc={desktopImageSrc}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => (
  <motion.div
    style={{ translateY: translate }}
    className="max-w-5xl mx-auto text-center mb-4 md:mb-0"
  >
    {titleComponent}
  </motion.div>
);

export const Card = ({
  rotate,
  scale,
  isMobile,
  mobileImageSrc,
  desktopImageSrc,
  children
}) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow:
        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
    }}
    className="max-w-5xl -mt-4 md:-mt-12 mx-auto h-[55vh] w-[85vw] md:h-[40rem] md:w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
      <img
        src={isMobile ? mobileImageSrc : desktopImageSrc}
        alt="Responsive"
        className="w-full h-full object-cover"
      />
      {children}
    </div>
  </motion.div>
);

// Usage Example
/*
<ContainerScroll
  titleComponent={<h1>Your Title</h1>}
  mobileImageSrc="/images/image-mobile.jpg"
  desktopImageSrc="/images/image-desktop.jpg"
>
  <p>Any other content you want inside the card.</p>
</ContainerScroll>
*/
