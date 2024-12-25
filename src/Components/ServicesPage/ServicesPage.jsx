import React from "react";
import ServiceSection from "../ServiceSection/ServiceSection";
import TypewriterAnimation from "./TypewriterAnimation";

const ServicesPage = () => {
  return (
    <div className="pt-10 lg:pt-14">
      <ServiceSection></ServiceSection>
      <section className="bg-[#071B27] w-full text-5xl h-full text-center text-red-600 rounded-2xl py-10 flex flex-wrap justify-center">
        <TypewriterAnimation></TypewriterAnimation>
      </section>
    </div>
  );
};

export default ServicesPage;
