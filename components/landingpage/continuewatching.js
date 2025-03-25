"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import movies from "./moviesdata";

const Continuewatching = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 302 + 24;
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
    <div className="pt-[40px] pr-[40px] pb-[40px] pl-[40px] relative bg-[#181A1C]">
      <h2 className="text-2xl font-bold text-white mb-2 ml-2">
        Melanjutkan Tonton Film
      </h2>

      <div className="relative">
        {scrollPosition > 0 && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black bg-opacity-80 rounded-full flex items-center justify-center text-white hover:bg-opacity-100 transition-all ring-1 ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          className="overflow-x-auto p-2 scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overflow: "-moz-scrollbars-none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex flex-nowrap space-x-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="w-[302px] h-[162px] rounded-lg overflow-hidden shadow-lg bg-white relative flex-shrink-0"
              >
                {" "}
                <Image
                  src={movie.imageUrl}
                  alt={movie.title}
                  width={302}
                  height={162}
                  layout="intrinsic"
                />
                <div className="absolute bottom-2 left-2 right-2 p-2">
                  <div className="flex justify-between items-center text-white">
                    <h5 className="text-xl font-semibold">{movie.title}</h5>
                    <div className="flex items-center">
                      <span className="text-white">★</span>
                      <span className="ml-1">{movie.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {scrollPosition < (movies.length - 4) * (302 + 24) && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black bg-opacity-80 rounded-full flex items-center justify-center text-white hover:bg-opacity-100 transition-all ring-1 ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
