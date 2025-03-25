"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import movies from "./moviesdata3";

const Newrealse = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = isMobile ? 200 + 16 : 302 + 24;
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

  return (
    <div className="pt-[20px] md:pt-[40px] pr-[20px] md:pr-[40px] pb-[20px] md:pb-[40px] pl-[20px] md:pl-[40px] relative bg-[#181A1C]">
      <h2 className="text-xl md:text-2xl font-bold mb-2 ml-2 text-white">
        Rilis Baru
      </h2>

      <div className="relative">
        {scrollPosition > 0 && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-10px] md:left-[-20px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-black bg-opacity-80 rounded-full flex items-center justify-center text-white hover:bg-opacity-100 transition-all ring-1 ring-white"
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
        >
          <div className="flex flex-nowrap space-x-4 md:space-x-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="w-[150px] h-[230px] md:w-[234px] md:h-[365px] rounded-lg shadow-lg bg-white relative flex-shrink-0"
              >
                <Image
                  src={movie.imageUrl}
                  alt={movie.title || `Image for episode ${movie.id}`}
                  width={isMobile ? 150 : 302}
                  height={isMobile ? 225 : 162}
                  className="object-cover w-full h-full rounded-t-lg"
                />
                {/* Positioning the title at the top */}
                {movie.title ? (
                  <h5 className="absolute top-1 md:top-2 left-1 md:left-2 text-[10px] md:text-xs font-semibold rounded-full bg-blue-500 text-white m-1 md:m-2 p-0.5 md:p-1">
                    {movie.title}
                  </h5>
                ) : (
                  <h5 className="absolute top-0 right-3 text-[10px] md:text-xs font-semibold bg-red-500 text-white p-1 md:p-1.5 rounded-b-lg text-center">
                    <span className="block">Top</span>
                    <span className="block">10</span>
                  </h5>
                )}
                <div className="absolute bottom-1 md:bottom-2 left-1 md:left-2 right-1 md:right-2 p-1 md:p-2">
                  <div className="flex justify-between items-center text-white">
                    <div className="flex items-center">
                      <span className="text-white text-sm md:text-base">★</span>
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
        {scrollPosition <
          (movies.length - (isMobile ? 2 : 4)) *
            (isMobile ? 200 + 16 : 302 + 24) && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-10px] md:right-[-20px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-black bg-opacity-80 rounded-full flex items-center justify-center text-white hover:bg-opacity-100 transition-all ring-1 ring-white"
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

export default Newrealse;
