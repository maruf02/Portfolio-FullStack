import React, { useEffect } from "react";
import "./SkillsSection.css";
import SkillsProgSpin from "../SkillsProgSpin/SkillsProgSpin";
import SkillsSOftProgs from "../SkillsSOftProgs/SkillsSOftProgs";
// import SkillsOthers from "../SkillsOthers/SkillsOthers";

const SkillsSection = () => {
  return (
    <div>
      <section className="bg-[#0f0f24] w-full pb-16  ">
        {/* <!-- skills title --> */}
        <section className=" mx-auto w-full  pt-10 pb-5">
          <h1 className="text-[#79d2a6] text-6xl text-center font-f font-bold ">
            Skills
          </h1>
          <p className="border-b-4 border-double border-[#79d2a6] w-3/4 md:w-4/12 lg:w-2/12 mx-auto"></p>
        </section>
        <section className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4  ">
          {/* skills left programming spinner */}
          <div className=" grid col-span-2">
            <SkillsProgSpin></SkillsProgSpin>
          </div>
          {/* skills left programming spinner */}
          {/* skills right soft+other progress bar */}
          <div className=" grid col-span-1  gap-2">
            {/* skills right soft progress bar */}
            <div className=" ">
              <SkillsSOftProgs></SkillsSOftProgs>
            </div>
            {/* skills right soft progress bar */}
            {/* skills right other progress bar */}
            {/* <div className="border ">
              <SkillsOthers></SkillsOthers>
            </div> */}
            {/* skills right other progress bar */}
          </div>
          {/* skills right soft+other progress bar */}
        </section>
        {/* card start */}
      </section>
    </div>
  );
};

export default SkillsSection;
