"use client";
import { useState } from "react";
import Image from "next/image";

const Loginpage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div
      className="bg-cover bg-center h-screen flex justify-center items-center p-4"
      style={{ backgroundImage: "url('/images/login.jpeg')" }}
    >
      <div className="bg-[#181A1C] bg-opacity-80 p-6 md:p-8 rounded-lg shadow-lg flex flex-col justify-center items-center w-full md:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={100} // Width asli gambar (sesuai dimensi sebenarnya)
          height={100} // Height asli gambar (sesuai dimensi sebenarnya)
          className="w-auto h-auto max-w-[80px] max-h-[80px] md:max-w-[100px] md:max-h-[100px] lg:max-w-[120px] lg:max-h-[120px]"
          priority
        />
        <h5 className="text-white text-xl md:text-2xl mb-3 md:mb-4 mt-3 md:mt-4">
          Masuk
        </h5>
        <p className="text-white mb-3 md:mb-4">Selamat datang kembali !</p>

        <div className="w-full mb-3 md:mb-4">
          <label htmlFor="username" className="text-white block mb-1 md:mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full p-2 rounded-full border-1 border-white bg-[#181A1C] bg-opacity-65 text-white"
            placeholder="Masukkan username"
          />
        </div>

        <div className="w-full mb-3 md:mb-4 relative">
          <label htmlFor="password" className="text-white block mb-1 md:mb-2">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full p-2 rounded-full border-1 border-white bg-[#181A1C] bg-opacity-65 text-white pr-10"
              placeholder="Masukkan password"
            />
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <svg
                className="shrink-0 w-5 h-5 md:w-6 md:h-6"
                viewBox="0 0 24 24"
                fill="#3D4142"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  className={
                    showPassword ? "hidden" : "hs-password-active:block"
                  }
                  d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                />
                <path
                  className={
                    showPassword ? "hidden" : "hs-password-active:block"
                  }
                  d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                />
                <path
                  className={
                    showPassword ? "hidden" : "hs-password-active:block"
                  }
                  d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                />
                <line
                  className={
                    showPassword ? "hidden" : "hs-password-active:block"
                  }
                  x1="2"
                  x2="22"
                  y1="2"
                  y2="22"
                />
                <path
                  className={
                    showPassword ? "hs-password-active:block" : "hidden"
                  }
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                />
                <circle
                  className={
                    showPassword ? "hs-password-active:block" : "hidden"
                  }
                  cx="12"
                  cy="12"
                  r="3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Additional Links - Modified for mobile alignment */}
        <div className="flex flex-wrap justify-between w-full text-white mb-3 md:mb-4 gap-y-1">
          <span className="text-sm whitespace-nowrap">
            Belum Punya Akun?
            <a
              href="/register"
              className="text-sm ml-1 font-bold text-white hover:underline whitespace-nowrap"
            >
              Daftar
            </a>
          </span>
          <a href="#" className="text-sm hover:underline whitespace-nowrap">
            Lupa kata sandi?
          </a>
        </div>

        <button className="w-full bg-[#3D4142] text-white py-2 rounded-full mt-3 md:mt-4 mb-2 hover:bg-blue-600">
          Masuk
        </button>
        <p className="text-white p-2">Atau</p>
        <button className="w-full bg-[#181A1C] bg-opacity-65 border-2 border-white text-white py-2 rounded-full mt-2 flex justify-center items-center hover:bg-[#181A1C]">
          <Image
            src="/images/google.png"
            alt="Google Icon"
            width={20}
            height={20}
            className="mr-3 w-4 h-4 md:w-5 md:h-5"
          />
          Masuk dengan Google
        </button>
      </div>
    </div>
  );
};

export default Loginpage;
