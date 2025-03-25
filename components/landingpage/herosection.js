import { FaInfoCircle } from "react-icons/fa";

const Herosection = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      <img
        src="/images/Rectangle 9.png"
        alt="Hero Background"
        className="absolute inset-0 w-screen h-screen object-cover opacity-70"
      />
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 bg-black bg-opacity-40">
        <div className="max-w-2xl w-full mb-10 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Duty After School
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Sebuah benda tak dikenal mengambil alih dunia dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah, Mereka pun segera menjadi pejuang garis
            depan dalam perang
          </p>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 bg-[#192DB7] text-white font-semibold rounded-full">
              Mulai
            </button>
            <div className="flex items-center gap-2">
              <button className="px-8 py-3 bg-[#22282A] text-white font-semibold rounded-full flex items-center ">
                <FaInfoCircle className="text-white mr-1" />
                <span>Selengkapnya</span>
              </button>
              <div className="w-14 h-12 ml-1 rounded-full bg-black bg-opacity-60 border border-white flex items-center justify-center">
                <span className="text-white font-bold text-sm">18+</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center border-white border-2 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
