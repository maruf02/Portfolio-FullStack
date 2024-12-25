import React, { useEffect } from "react";

const BannerClient = () => {
  useEffect(() => {
    const countAnimation = () => {
      const experienceElement = document.getElementById("experience");
      const clientsElement = document.getElementById("clients");
      const projectsElement = document.getElementById("projects");
      const screensElement = document.getElementById("screens");

      const obj = {
        ex: [0, 1],
        cl: [0, 10],
        pr: [0, 10],
        sc: [0, 50],
      };

      setInterval(() => {
        obj.ex[0] = obj.ex[0] < obj.ex[1] ? obj.ex[0] + 1 : obj.ex[1];
        obj.cl[0] = obj.cl[0] < obj.cl[1] ? obj.cl[0] + 1 : obj.cl[1];
        obj.pr[0] = obj.pr[0] < obj.pr[1] ? obj.pr[0] + 1 : obj.pr[1];
        obj.sc[0] = obj.sc[0] < obj.sc[1] ? obj.sc[0] + 1 : obj.sc[1];

        experienceElement.textContent = `${obj.ex[0]} +`;
        clientsElement.textContent = `${obj.cl[0]} +`;
        projectsElement.textContent = `${obj.pr[0]} +`;
        screensElement.textContent = `${obj.sc[0]} +`;
      }, 100);
    };

    window.addEventListener("load", countAnimation);
  }, []);

  return (
    <div>
      <section className="ml-4 lg:ml-8 lg:pt-10 order-3 hidden lg:inline-block">
        <div className="my-10"></div>
        <div className="pl-10 text-gray-300 text-xl font-bold">
          <div>
            <h1 id="experience">1 +</h1>
            <hr className="w-10/12 my-2" />
            <h3 className="font-bold text-xl pb-6">Years of experience</h3>
          </div>
          <div>
            <h1 id="clients">10 +</h1>
            <hr className="w-6/12 my-2" />
            <h3 className="font-bold text-xl pb-6">Happy clients</h3>
          </div>
          <div>
            <h1 id="projects">20 +</h1>
            <hr className="w-9/12 my-2" />
            <h3 className="font-bold text-xl pb-6">Projects completed</h3>
          </div>
          <div>
            <h1 id="screens">100 +</h1>
            <hr className="w-4/12 my-2" />
            <h3 className="font-bold text-xl pb-6">Screens</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerClient;
