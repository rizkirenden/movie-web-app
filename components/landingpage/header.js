"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      {/* Main Header Section */}
      <div className="bg-[#181A1C] w-full h-[70px] md:h-[94px] px-4 md:px-10 py-4">
        <div className="w-full flex items-center justify-between">
          {/* Left Section - Logo & Menu */}
          <div className="flex items-center">
            {/* Mobile Menu Button - Only shows on mobile */}
            <button
              className="md:hidden mr-4 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Logo */}
            <Image
              src="/images/logo.png"
              alt="logo"
              width={96}
              height={24}
              className="ml-2 md:ml-6"
            />

            {/* Desktop Menu - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-14 ml-8 lg:ml-14">
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm lg:text-base"
              >
                Series
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm lg:text-base"
              >
                Film
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm lg:text-base"
              >
                Daftar Saya
              </a>
            </div>
          </div>

          {/* Right Section - Avatar & Dropdown */}
          <div className="relative">
            {/* Avatar with Dropdown Arrow */}
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
                  className="block px-4 py-2 text-white hover:bg-[#3E4042] text-sm md:text-base"
                >
                  Profil Saya
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-[#3E4042] text-sm md:text-base"
                >
                  Ubah Premium
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-[#3E4042] text-sm md:text-base"
                >
                  Keluar
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu - Placed outside the Header */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#181A1C] absolute left-0 right-0 top-[70px] z-40 px-4 py-2 shadow-lg">
          <a
            href="#"
            className="block py-3 text-white border-b border-[#2D2F31]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Series
          </a>
          <a
            href="#"
            className="block py-3 text-white border-b border-[#2D2F31]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Film
          </a>
          <a
            href="#"
            className="block py-3 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Daftar Saya
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
