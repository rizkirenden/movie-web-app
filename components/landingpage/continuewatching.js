"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import movies from "./moviesdata";

const Continuewatching = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = windowWidth < 768 ? 280 : 302;
    const gap = windowWidth < 768 ? 16 : 24;
    const scrollAmount = cardWidth + gap;

    const newPosition =
      direction === "left"
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
    setScrollPosition(newPosition);
  };

  const cardWidth = windowWidth < 768 ? 280 : 302;
  const cardHeight = windowWidth < 768 ? 150 : 162;
  const maxScroll =
    (movies.length -
      Math.floor(windowWidth / (cardWidth + (windowWidth < 768 ? 16 : 24)))) *
    (cardWidth + (windowWidth < 768 ? 16 : 24));

  return (
    <div className="pt-6 md:pt-[40px] pr-4 md:pr-[40px] pb-6 md:pb-[40px] pl-4 md:pl-[40px] relative bg-[#181A1C]">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-2 ml-2">
        Melanjutkan Tonton Film
      </h2>

      <div className="relative">
        {scrollPosition > 0 && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 md:left-[-20px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-black bg-opacity-80 rounded-full flex items-center justify-center text-white hover:bg-opacity-100 transition-all ring-1 ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        <div
          ref={scrollRef}
          className="overflow-x-auto p-2 scroll-smooth hide-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overflow: "-moz-scrollbars-none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex flex-nowrap gap-4 md:gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className={`w-[${cardWidth}px] h-[${cardHeight}px] rounded-lg overflow-hidden shadow-lg bg-white relative flex-shrink-0`}
                style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}
              >
                <Image
                  src={movie.imageUrl}
                  alt={movie.title}
                  width={cardWidth}
                  height={cardHeight}
                  layout="responsive"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 p-2">
                  <div className="flex justify-between items-center text-white">
                    <h5 className="text-lg md:text-xl font-semibold">
                      {movie.title}
                    </h5>
                    <div className="flex items-center">
                      <span className="text-white">★</span>
                      <span className="ml-1 text-sm md:text-base">
                        {movie.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {scrollPosition < maxScroll && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 md:right-[-20px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-black bg-opacity-80 rounded-full flex items-center justify-center text-white hover:bg-opacity-100 transition-all ring-1 ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Continuewatching;
