"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX, FiUser, FiStar, FiLogOut } from "react-icons/fi";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      {/* Main Header Section */}
      <div className="bg-[#181A1C] w-full h-[70px] md:h-[94px] px-4 md:px-10 py-4">
        <div className="w-full flex items-center justify-between">
          {/* Left Section - Logo & Menu */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Logo - Different for mobile and desktop */}
            <div className="flex items-center">
              {/* Mobile Logo - Hidden on desktop */}
              <Image
                src="/images/setmobile.png"
                alt="logo"
                width={30}
                height={30}
                className="md:hidden"
              />

              {/* Desktop Logo - Hidden on mobile */}
              <Image
                src="/images/logo.png"
                alt="logo"
                width={96}
                height={24}
                className="hidden md:block"
              />
            </div>

            {/* Menu Items - Always visible horizontally */}
            <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm md:text-base"
              >
                Series
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm md:text-base"
              >
                Film
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm md:text-base"
              >
                Daftar Saya
              </a>
            </div>
          </div>

          {/* Right Section - Avatar */}
          <div className="relative">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Image
                src="/images/Ellipse 395.png"
                alt="User"
                width={32}
                height={32}
                className="rounded-full w-8 h-8 md:w-10 md:h-10"
              />
              <svg
                className="w-3 h-3 md:w-4 md:h-4 text-white transform transition-transform"
                style={{
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#2D2F31] rounded-md shadow-lg py-1 z-50">
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-white hover:text-[#0586FF] text-sm md:text-base"
                >
                  <FiUser className="mr-2" />
                  Profil Saya
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-white hover:text-[#0586FF] text-sm md:text-base"
                >
                  <FiStar className="mr-2" />
                  Ubah Premium
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-white hover:text-[#0586FF] text-sm md:text-base"
                >
                  <FiLogOut className="mr-2" />
                  Keluar
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
