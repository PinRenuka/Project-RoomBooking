import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = (building) => {
    navigate(`/picking/${building}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="h-screen bg-[url(./img/Pic-sit.png)] bg-cover bg-center text-white flex flex-col items-center">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          SIT ROOM <br /> BOOKINGS SYSTEM
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mt-4">
          จองห้องคณะเทคโนโลยีสารสนเทศ SIT
        </h2>
      </div>

      <div className="flex justify-center gap-8 md:gap-16 pb-10">
        <div
          className="bg-[url(./img/lx-bu.png)] bg-cover bg-center rounded-xl font-bold text-xl md:text-2xl px-6 py-10 flex items-center justify-center w-64 h-40 cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => handleClick("CB2")}
        >
          CB
        </div>

        <div
          className="bg-[url(./img/cardlx.png)] bg-cover bg-center rounded-xl font-bold text-xl md:text-2xl px-6 py-10 flex items-center justify-center w-64 h-40 cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => handleClick("LX")}
        >
          Lx Building
        </div>

        <div
          className="bg-[url(./img/cardsit.png)] bg-cover bg-center rounded-xl font-bold text-xl md:text-2xl px-6 py-10 flex items-center justify-center w-64 h-40 cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => handleClick("SIT")}
        >
          SIT Building
        </div>
      </div>
    </div>
  );
};

export default HomePage;
