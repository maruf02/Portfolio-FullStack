import React, { useState } from "react";
import ProjectPageAllCards from "../ProjectPageAllCards/ProjectPageAllCards";
import ProjectCategory from "../ProjectCategory/ProjectCategory";

const ProjectPage = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="pt-12 lg:pt-14">
      <section
        className="bg-[#1B1B42] mx-auto w-full h-fit pb-16 "
        id="Portfolio"
      >
        <section className=" mx-auto w-full  pt-16 pb-5">
          <h1 className="text-[#79d2a6] text-4xl md:text-5xl lg:text-6xl text-center font-f font-bold ">
            Recent Work
          </h1>
          <p className="border-b-4 border-double border-[#79d2a6] w-3/4 md:w-6/12 lg:w-4/12 mx-auto"></p>
        </section>
        <ProjectCategory setSearchText={setSearchText}></ProjectCategory>
        <ProjectPageAllCards searchText={searchText}></ProjectPageAllCards>
      </section>
    </div>
  );
};

export default ProjectPage;
