import React from "react";
import ProPicAnime from "../ProPicAnime/ProPicAnime";
import AboutMeDetails from "../AboutMeDetails/AboutMeDetails";
import BannerClient from "../BannerClient/BannerClient";

const AboutPage = () => {
  return (
    <div className="pt-8 lg:pt-14">
      <section className="  bg-[#071B27] w-full grid grid-cols-1 gap-4">
        <section className="container mx-auto  h-full  mb-0">
          <ProPicAnime></ProPicAnime>
        </section>
        <section className="container mx-auto  h-full mb-4">
          <section className=" w-full grid grid-cols-2 lg:grid-cols-3">
            <section className=" col-span-2 h-full relative -top-10">
              <AboutMeDetails></AboutMeDetails>
            </section>
            <section className=" h-full">
              <BannerClient></BannerClient>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default AboutPage;
