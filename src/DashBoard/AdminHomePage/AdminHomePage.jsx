import React from "react";
import NavBarDashBoard from "../NavBarDashBoard/NavBarDashBoard";
import { Outlet } from "react-router-dom";
import NavBarMobile from "../NavBarDashBoard/NavBarMobile";

const AdminHomePage = () => {
  return (
    <div className="w-full h-full min-h-screen bg-slate-100 text-black p-0 m-0 mt-20">
      <div className=" lg:hidden w-full h-full  ">
        <NavBarMobile />
      </div>
      <div className="w-full h-full min-h-screen   p-2">
        <div className="flex flex-row w-full h-full min-h-screen  ">
          <div className="w-fit h-full  ">
            <NavBarDashBoard />
          </div>
          <div className="w-full h-full  ">
            <Outlet />
          </div>
        </div>
        <div className="mx-auto">{/* <FooterDashBoard /> */}</div>
      </div>
    </div>
  );
};

export default AdminHomePage;
