import React, { useEffect, useState } from "react";
import SkillsOthersCard from "../SkillsOthersCard/SkillsOthersCard";

const SkillsOthers = () => {
  const [skillsOthers, setSkillsOthers] = useState([]);

  useEffect(() => {
    fetch(
      "https://maruf02.github.io/Asset-Json-Img-dont-delete/OthersSkills.json"
    )
      .then((res) => res.json())
      .then((data) => setSkillsOthers(data));
  }, []);
  // console.log(skillsOthers);
  return (
    <div>
      <section className=" mx-auto w-full  pt-10 pb-5">
        <h1 className="text-[#79d2a6] text-4xl text-center font-f font-bold ">
          Others Skills
        </h1>
        <p className="border-b-4 border-double border-[#79d2a6] w-3/4 md:w-4/12 lg:w-8/12 mx-auto"></p>
      </section>
      <section className="container mx-auto grid grid-cols-1">
        <div className="mx-10">
          {/* ************* */}

          {skillsOthers.map((card) => (
            <SkillsOthersCard key={card.id} card={card}></SkillsOthersCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillsOthers;
