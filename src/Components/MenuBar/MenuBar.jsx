// import React, { useEffect, useState } from "react";
import MenuBarList from "../MenuBarList/MenuBarList";
import MenuBottomBar from "../MenuBottomBar/MenuBottomBar";

const MenuBar = () => {
  return (
    <div>
      <nav className=" bg-gradient-to-r from-[#114250] to-[#131514] flex  w-full items-center fixed top-0  z-50 h-16 lg:h-20 ">
        <div className="container mx-auto w-11/12 flex  justify-between  sm:hidden lg:inline-flex">
          {/* <!-- logo for only small device  fixed top-0  z-50 --> */}
          <div className="container mx-auto  md:hidden">
            <h2 className="text-4xl  text-center font-f text-[#53c9e0] ">
              MARUF
            </h2>
          </div>
          {/* <!-- logo for only small device --> */}
          <a href="" className="logo">
            <h3>
              <div className="hidden lg:inline">
                <h2 className="text-4xl font-f text-[#53c9e0]">MARUF</h2>
              </div>
            </h3>
          </a>
          <MenuBarList></MenuBarList>
        </div>
        {/* <!-- logo for only md device --> */}
        <div className="container mx-auto hidden md:inline  lg:hidden">
          <h2 className="text-4xl  text-center font-f text-[#53c9e0] ">
            MARUF
          </h2>
        </div>
        {/* <!-- logo for only md device --> */}
      </nav>

      <MenuBottomBar></MenuBottomBar>
    </div>
  );
};

export default MenuBar;
