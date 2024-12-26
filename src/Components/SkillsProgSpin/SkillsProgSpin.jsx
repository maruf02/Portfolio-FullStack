import React, { useEffect, useState } from "react";
import SkillsProgSpinCard from "../SkillsProgSpinCard/SkillsProgSpinCard";
import { useGetSkillsByTypeQuery } from "../../Redux/features/user/userApi";

const SkillsProgSpin = () => {
  // const [skillsProgSpin, setSkillsProgSpin] = useState([]);
  const type = "programmingSkill";
  const { data: skill } = useGetSkillsByTypeQuery({ type });
  const skills = skill?.data || [];
  // useEffect(() => {
  //   fetch(
  //     "https://maruf02.github.io/Asset-Json-Img-dont-delete/ProgrammingSkills.json"
  //     // "http://localhost:3000/api/programmingSkill"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setSkillsProgSpin(data));
  // }, []);

  console.log("skillsProgSpin", skill);

  return (
    <div>
      <section className=" mx-auto w-full  pt-10 pb-5">
        <h1 className="text-[#79d2a6] text-3xl lg:text-5xl text-center font-f font-bold ">
          Programming Skills
        </h1>
        <p className="border-b-4 border-double border-[#79d2a6] w-3/4 md:w-4/12 lg:w-7/12 mx-auto"></p>
      </section>
      <section className="container mx-auto  pt-5">
        <div className=" container mx-auto flex flex-wrap justify-center align-middle text-center gap-2 lg:gap-7 ">
          {/* ************* */}

          {skills.map((card) => (
            <SkillsProgSpinCard key={card.id} card={card}></SkillsProgSpinCard>
          ))}
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default SkillsProgSpin;
