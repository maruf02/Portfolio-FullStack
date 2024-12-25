import { useEffect } from "react";
import BannerIntro from "../BannerIntro/BannerIntro";
import ProPicAnime from "../ProPicAnime/ProPicAnime";
import BannerClient from "../BannerClient/BannerClient";

const BannerSection = () => {
  useEffect(() => {
    window.onload = function () {
      Particles.init({
        selector: ".background",
        maxParticles: 150,
        connectParticles: "true",
        speed: 1,
        minDistance: 40,
        sizeVariations: 8,
        color: "#87c3fa",
      });
    };
  }, []);
  return (
    <div>
      <canvas
        className="background absolute block top-0 left-0 z-0"
        id="particles-js"
      ></canvas>
      <div className="bg-gradient-to-r from-[#114250] to-[#131514]  bg-no-repeat font-f py-16 ">
        <section className="container mx-auto lg:pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-auto  ">
          {/* <!-- left side --> */}
          <BannerIntro></BannerIntro>
          {/* <!-- middle section image anime  border  --> */}
          <section className="order-first  md:order-none">
            <ProPicAnime></ProPicAnime>
          </section>
          {/* <!-- middle section image anime --> */}
          {/* <!-- right section  --> */}
          <BannerClient></BannerClient>
        </section>
        {/* <!-- draw line for tablet --> */}
        <p className="hidden  border-b-2 my-10 w-full container mx-auto md:inline-block lg:hidden"></p>
      </div>
    </div>
  );
};

export default BannerSection;
