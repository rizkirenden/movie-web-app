const Header = () => {
  return (
    <div className="flex bg-[#181A1C] w-full h-[94px] px-10 py-4">
      <div className="w-full flex items-center justify-between">
        {/* Bagian Kiri - Logo & Menu */}
        <div className="flex items-center">
          <img src="/images/logo.png" alt="logo" className="w-24 ml-6" />
          <div className="flex items-center space-x-14 ml-14">
            <a href="#" className="text-white hover:text-gray-300">
              Series
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Film
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Daftar Saya
            </a>
          </div>
        </div>

        {/* Bagian Kanan - Avatar & Dropdown */}
        <div className="relative group">
          {/* Avatar dengan Panah Dropdown */}
          <div className="flex items-center space-x-2 cursor-pointer mr-6">
            <img
              src="/images/Ellipse 395.png"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <svg
              className="w-4 h-4 text-white transform group-hover:rotate-180 transition-transform"
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

          {/* Menu Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-[#2D2F31] rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-[#3E4042]"
            >
              Profil Saya
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-[#3E4042]"
            >
              Ubah Premium
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-[#3E4042]"
            >
              Keluar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
