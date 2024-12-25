import React from "react";
import "./ErrorPage.css";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#2B2B5F]">
      <div>
        <p className=" h-32 w-32 mb-10 relative left-[35%] md:left-[45%]">
          <img src="../../close.png" alt="" />
        </p>
        <h1 className="text-[#79d2a6] text-3xl md:text-6xl text-center font-f font-bold pb-10">
          OOPPSS!!
        </h1>
        <h1 className="text-[#79d2a6] text-2xl md:text-4xl text-center font-f font-bold">
          Look like you're lost
        </h1>
        <h1 className="text-[#79d2a6] text-xl md:text-2xl text-center font-f font-bold">
          the page you are looking for not avaible!
        </h1>
        <div className="outer relative  h-12 w-80 rounded mt-3 top-6 left-10 md:left-40">
          <button
            className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none
                          border-none text-2xl z-[9] tracking-[1px]  cursor-pointer h-[44px] w-[315px] rounded
                          hover:bg-lime-500"
          >
            <NavLink to="/">Let's Go Home</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
