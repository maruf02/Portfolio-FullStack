import React, { useState } from "react";
import ProjectCategory from "../ProjectCategory/ProjectCategory";
import ProjectsAllCards from "../ProjectsAllCards/ProjectsAllCards";
import { NavLink } from "react-router-dom";

const ProjectsSection = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
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
        <ProjectsAllCards searchText={searchText}></ProjectsAllCards>
        <section className=" mx-auto w-full  pt-16   ">
          <div className=" flex justify-center ">
            <div className="outer relative  h-12 w-56 rounded-lg mt-3  ">
              <button
                className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none 
                          border-none text-xl font-bold z-[9] tracking-[1px] uppercase cursor-pointer h-[44px] w-[218px] rounded-lg "
              >
                <NavLink to="/Projects">See All Project</NavLink>
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProjectsSection;
