import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import { Outlet } from "react-router-dom";
import FooterSection from "../FooterSection/FooterSection";
import DigitalClock from "../DigitalClock/DigitalClock";

const Root = () => {
  return (
    <div className="h-full scroll-smooth overflow-x-hidden overflow-y-hidden">
      <MenuBar></MenuBar>
      <Outlet></Outlet>
      <FooterSection></FooterSection>
      {/* <DigitalClock></DigitalClock> */}
    </div>
  );
};

export default Root;
