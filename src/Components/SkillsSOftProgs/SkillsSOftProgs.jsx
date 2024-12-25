import React, { useEffect, useState } from "react";
import SkillsSoftProgCard from "../SkillsSoftProgCard/SkillsSoftProgCard";
import SkillsOthers from "../SkillsOthers/SkillsOthers";

const SkillsSOftProgs = () => {
  const [skillsSoftProg, setSkillsSoftProg] = useState([]);

  useEffect(() => {
    fetch(
      "https://maruf02.github.io/Asset-Json-Img-dont-delete/SoftSkills.json"
    )
      .then((res) => res.json())
      .then((data) => setSkillsSoftProg(data));
  }, []);
  // console.log(skillsSoftProg);
  return (
    <div>
      <section className=" mx-auto w-full  pt-10 pb-5">
        <h1 className="text-[#79d2a6] text-4xl text-center font-f font-bold ">
          Soft Skills
        </h1>
        <p className="border-b-4 border-double border-[#79d2a6] w-3/4 md:w-4/12 lg:w-6/12 mx-auto"></p>
      </section>
      <section className="container mx-auto grid grid-cols-1">
        <div className="mx-10">
          {skillsSoftProg.slice(0, 6).map((card) => (
            <SkillsSoftProgCard key={card.id} card={card}></SkillsSoftProgCard>
          ))}
        </div>
      </section>
      <SkillsOthers></SkillsOthers>
    </div>
  );
};

export default SkillsSOftProgs;
