"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showGenre, setShowGenre] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row flex-nowrap w-full bg-[#181A1C] h-auto md:h-52 border-t-2 border-white p-[20px] md:p-[40px]">
      <div className="flex flex-col justify-center w-full md:w-1/4 h-full mb-6 md:mb-0">
        <Image src={"/images/logo.png"} alt="Logo" width={100} height={24} />
        <p className="text-white mt-4">@2025 Chill All Rights Reserved</p>
      </div>

      <div className="flex flex-col justify-center w-full md:w-1/2 h-full mb-6 md:mb-0">
        <button
          className="md:hidden flex items-center justify-between text-white font-bold py-1"
          onClick={() => setShowGenre(!showGenre)}
        >
          <h3>Genre</h3>
          <span className="ml-2">{showGenre ? "▲" : "▼"}</span>
        </button>
        <h3 className="hidden md:block text-white font-bold py-1">Genre</h3>

        {(showGenre || !isMobile) && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2 md:mt-0">
            <div>
              <p className="text-white py-1">Aksi</p>
              <p className="text-white py-1">Anak-anak</p>
              <p className="text-white py-1">Anime</p>
              <p className="text-white py-1">Britania</p>
            </div>
            <div>
              <p className="text-white py-1">Drama</p>
              <p className="text-white py-1">Fantasi Ilmiah & Fantasi</p>
              <p className="text-white py-1">Kejahatan</p>
              <p className="text-white py-1">KDrama</p>
            </div>
            <div>
              <p className="text-white py-1">Komedi</p>
              <p className="text-white py-1">Petualangan</p>
              <p className="text-white py-1">Perang</p>
              <p className="text-white py-1">Romantis</p>
            </div>
            <div>
              <p className="text-white py-1">Sains & Alam</p>
              <p className="text-white py-1">Thriller</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center w-full md:w-1/4 h-full md:ml-11">
        <button
          className="md:hidden flex items-center justify-between text-white font-bold py-1"
          onClick={() => setShowHelp(!showHelp)}
        >
          <h3>Bantuan</h3>
          <span className="ml-2">{showHelp ? "▲" : "▼"}</span>
        </button>
        <h3 className="hidden md:block text-white font-bold text-left py-1">
          Bantuan
        </h3>

        {(showHelp || !isMobile) && (
          <div className="mt-2 md:mt-0">
            <p className="text-white text-left py-1">FAQ</p>
            <p className="text-white text-left py-1">Kontak Kami</p>
            <p className="text-white text-left py-1">Privasi</p>
            <p className="text-white text-left py-1">Syarat & Ketentuan</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
