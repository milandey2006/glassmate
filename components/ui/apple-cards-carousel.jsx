"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click";
import Image from "next/image";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
  <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
    <div className="relative w-full">
      
      {/* DESKTOP/TABLET - SIDE BUTTONS (Hidden on mobile) */}
      <button
        className={cn(
          "hidden md:flex absolute left-2 top-1/2 z-40 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed",
          "md:left-4 md:h-14 md:w-14",
          !canScrollLeft && "opacity-30 cursor-not-allowed"
        )}
        onClick={scrollLeft}
        disabled={!canScrollLeft}
      >
        <IconArrowNarrowLeft className="h-5 w-5 text-gray-700 md:h-6 md:w-6" />
      </button>

      <button
        className={cn(
          "hidden md:flex absolute right-2 top-1/2 z-40 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed",
          "md:right-4 md:h-14 md:w-14",
          !canScrollRight && "opacity-30 cursor-not-allowed"
        )}
        onClick={scrollRight}
        disabled={!canScrollRight}
      >
        <IconArrowNarrowRight className="h-5 w-5 text-gray-700 md:h-6 md:w-6" />
      </button>

      {/* CAROUSEL CONTAINER */}
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20 px-4 md:px-16 lg:px-20"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        {/* Your existing carousel content */}
        <div className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}></div>

        <div
          className={cn(
            "flex flex-row justify-start gap-4 pl-4",
            "mx-auto max-w-7xl"
          )}
        >
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                  once: true,
                },
              }}
              key={"card" + index}
              className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* MOBILE - NAVIGATION BUTTONS BELOW CARDS (Matching your image) */}
      <div className="flex md:hidden justify-center items-center gap-4 pt-8 pb-4">
        <button
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 border border-gray-200 shadow-sm transition-all duration-300 hover:bg-gray-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed",
            !canScrollLeft && "opacity-50 cursor-not-allowed"
          )}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 border border-gray-200 shadow-sm transition-all duration-300 hover:bg-gray-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed",
            !canScrollRight && "opacity-50 cursor-not-allowed"
          )}
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      
    </div>
  </CarouselContext.Provider>
);

};

export const Card = ({
  card,
  index,
  layout = false
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900">
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}>
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white">
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white">
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
              <div>{card.offer}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base">
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl">
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover" />
      </motion.button>
    </>
  );
};
const CursorText = ({ text, position, visible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
        x: position.x + 15,
        y: position.y + 15
      }}
      transition={{ duration: 0.2 }}
      className="fixed z-[9999] pointer-events-none select-none text-sm font-medium bg-black text-white px-3 py-1 rounded-full shadow-lg"
    >
      {text}
    </motion.div>
  );
};


export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      alt={alt ? alt : "Background of a beautiful view"}
    />
  );
};

